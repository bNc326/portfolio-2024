import { createContext, useEffect, useState, useRef } from "react";
import OpenAI from "openai";
import {
  Modal,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  IconButton,
  CardActions,
  CircularProgress,
} from "@mui/material";
import { SiOpenai } from "react-icons/si";
import { format } from "date-fns";
import { MdClose } from "react-icons/md";
import { enqueueSnackbar } from "notistack";

type chatGPTContent = {
  message: string;
  date: Date;
};

export interface OpenAIContextModel {
  state: {
    isLoading: boolean;
    isDisabled: boolean;
  };
  hasContent: boolean;
  handleShowContent: () => void;
  handleGenerateMessage: (message: string) => Promise<void>;
}

export const OpenAIContext = createContext<OpenAIContextModel>({
  handleGenerateMessage: async (message: string) => {},
  handleShowContent: () => {},
  hasContent: false,
  state: {
    isLoading: false,
    isDisabled: false,
  },
});

export const OpenAIContextProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const [GPT, setGPT] = useState<OpenAI | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isOpen, setOpen] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleGetMessage = () => {
    return JSON.parse(
      localStorage.getItem("chatGPT-response") as string
    ) as chatGPTContent | null;
  };

  const handleSetMessage = (message: string, date: Date) => {
    const content: chatGPTContent = {
      message,
      date,
    };
    localStorage.setItem("chatGPT-response", JSON.stringify(content));
  };

  const handleHasMessage = () => {
    return !!handleGetMessage();
  };

  useEffect(() => {
    setLoading(true);
    const cleanup = setTimeout(() => {
      if (handleHasMessage()) {
        setHasContent(true);
        setLoading(false);
        setDisabled(false);
        return;
      }

      try {
        setGPT(
          new OpenAI({
            apiKey: process.env["REACT_APP_OPENAI_API_KEY"], // This is the default and can be omitted
            dangerouslyAllowBrowser: true,
          })
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
        setDisabled(true);
      }
    }, 1000);

    return () => clearTimeout(cleanup);
  }, []);

  const handleReset = () => {
    setLoading(false);
    setDisabled(false);
    setMessage(undefined);
    setDate(undefined);
    setOpen(false);
  };

  const handleGenerateMessage = async (userMessage: string) => {
    setLoading(true);
    try {
      const res = await GPT?.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: [
          {
            role: "system",
            content: `Szia én egy HR-vagyok egy informatikai cégtől. Van egy ember akit szeretnék meghalgatni egy állásinterjún. Az embernek van React  + Typescript-es tapasztalata, van több hobbiprojektje ezenkívűl dolgozott már szerveroldalon is express js-el, nodejs-el. Adatbázis téren találkozott már MongoDb-vel és MySQL valamint MsSQL el is. Szép igényes munkát ad ki a kezei közül és az összes oldala telejesen responsive. Még megemlíteném azt is, hogy websocket sem akadály neki. Igaz még releváns szakmai tapasztalata nincsen. Az lenne a kérdésem, hogy szerinted alkalmas-e erre/ezekre a munkára/munkákra vagy pozícióra: ${userMessage} Kérlek válaszolj a kérdésemre részletesen érvelve. Úgy formázd a szöveget, mint egy emailt/hivatalos dokumentumot tehát: Kedves/Tisztelt HR! ... Üdvözlettel/Tisztelettel ChatGPT`,
          },
        ],
        stream: true,
      });

      setOpen(true);

      let fullContent = "";

      for await (const chunk of res as any) {
        fullContent += chunk.choices[0]?.delta?.content || "";
        setMessage(fullContent);
      }

      const savedDate = new Date();
      setDate(savedDate);
      setLoading(false);
      handleSetMessage(fullContent, savedDate);
      setHasContent(true);
    } catch (error) {
      enqueueSnackbar("ChatGPT ERROR! Valami hiba történt a chapGPT-vel", {
        variant: "error",
      });
      setLoading(false);
    }
  };

  const handleShowContent = () => {
    if (handleHasMessage()) {
      const { message, date } = handleGetMessage() as chatGPTContent;
      setMessage(message);
      setDate(date);
      setOpen(true);
      return;
    }
  };

  const value = {
    hasContent,
    state: { isLoading, isDisabled },
    handleGenerateMessage,
    handleShowContent,
  };
  return (
    <OpenAIContext.Provider value={value}>
      {children}
      <Modal
        open={isOpen}
        onClose={() => handleReset()}
        sx={{ width: "100%", height: "100%" }}
      >
        <div className="w-full h-full flex justify-center items-center py-8">
          <Card
            sx={{
              height: "100%",
              width: "91.98%",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardHeader
              title={<span className="text-title font-bold">ChatGPT</span>}
              subheader={
                <span className="text-subTitle">
                  {format(new Date(date ? date : new Date()), "yy-MM-dd H:mm")}
                </span>
              }
              avatar={
                <Avatar sx={{ bgcolor: "#74aa9c" }}>
                  {isLoading ? (
                    <CircularProgress sx={{ color: "white" }} />
                  ) : (
                    <SiOpenai color="white" size={24} />
                  )}
                </Avatar>
              }
              action={
                <IconButton onClick={handleReset}>
                  <MdClose color="white" size={24} />
                </IconButton>
              }
            />
            <CardContent sx={{ height: "100%", overflow: "auto" }}>
              <div className="whitespace-pre-wrap h-full overflow-auto">
                {message}
              </div>
            </CardContent>
            {/* <CardActions>
              <Button fullWidth variant="contained">
                Kapcsolat
              </Button>
            </CardActions> */}
          </Card>
        </div>
      </Modal>
    </OpenAIContext.Provider>
  );
};
