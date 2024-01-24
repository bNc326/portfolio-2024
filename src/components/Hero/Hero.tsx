import React, { useContext } from "react";
import { Button, CircularProgress, TextField, IconButton, Chip } from "@mui/material";
import { SiOpenai } from "react-icons/si";
import { OpenAIContext, OpenAIContextModel } from "../../context/OpenaiContext";
import Lottie from "lottie-react";
import Animation from "../../assets/hero.json";
import DownArrow from "../../assets/down_arrow.json";
import { useParallax } from "react-scroll-parallax";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdClose } from "react-icons/md";

const validationSchema = z.object({
  message: z
    .string({ required_error: "Adja meg a munka típusát, feladatot/okat!" })
    .min(10, "Minimum 10 karaktert meg kell adni!")
    .max(200, "Maximum 200 karaktert lehet megadni!"),
});

type Input = z.infer<typeof validationSchema>;

const Hero = () => {
  const { state, hasContent, handleGenerateMessage, handleShowContent } =
    useContext(OpenAIContext) as OpenAIContextModel;

  const { ref } = useParallax<HTMLDivElement>({ speed: -25 });

  const {
    reset,
    trigger,
    control,
    getValues,
    formState: { errors },
  } = useForm<Input>({
    mode: "all",
    resolver: zodResolver(validationSchema),
  });

  const handleGenerate = async () => {
    const isValid = await trigger();

    if (!isValid) {
      enqueueSnackbar("Töltse ki helyes a szöveg mezőt!", {
        variant: "error",
        preventDuplicate: true,
        action: (snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <MdClose color="white" />
          </IconButton>
        ),
      });
      return;
    }

    try {
      const data = getValues();
      await handleGenerateMessage(data.message);
      reset({ message: "" });
    } catch (error) {
      enqueueSnackbar("Valami hiba történt próbálja újra.", {
        variant: "error",
        preventDuplicate: true,
        action: (snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <MdClose color="white" />
          </IconButton>
        ),
      });
    }
  };

  return (
    <section className="w-full h-full relative flex justify-center">
      <div className="w-11/12 max-w-[1536px] flex flex-col mobile:flex-row items-center gap-4 py-8">
        <div className="w-full mobile:w-1/2 flex justify-center">
          <div className="w-full">
            <h1 className="text-h1 text-title">Hello!</h1>
            <h2 className="text-h2 text-subTitle">Bence vagyok</h2>
            <p className="text-p text-desc">Frontend/Full Stack fejlesztő</p>
            <div
              className={`w-full relative pt-8 rounded-lg] ${
                state.isLoading ? "opacity-80 pointer-events-none" : ""
              } `}
            >
              {state.isLoading && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
              {hasContent ? (
                <div className="w-full flex flex-col gap-2">
                  <Button
                    onClick={handleShowContent}
                    fullWidth
                    variant="contained"
                    sx={{ color: "white" }}
                  >
                    <span className="px-4">Generált szöveg megtekintése</span>
                  </Button>
                  <span className="text-desc">Powered by ChatGPT <Chip label="beta" color="warning" variant="outlined"/></span>
                </div>
              ) : (
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      disabled={state.isDisabled || state.isLoading}
                      fullWidth
                      multiline
                      maxRows={4}
                      variant="outlined"
                      label="Milyen munkát szánna nekem?"
                      placeholder="Pl: Meglévő és újonnan fejlesztett rendszereket fog fejleszteni.."
                      InputProps={{
                        startAdornment: <SiOpenai className="mr-4" size={24} />,
                        endAdornment: (
                          <Button
                            onClick={handleGenerate}
                            sx={{ color: "white" }}
                          >
                            <span className="px-4">generálás</span>
                          </Button>
                        ),
                      }}
                      error={!!errors.message}
                      helperText={
                        errors.message?.message ? (
                          errors.message.message
                        ) : (
                          <span>Powered by ChatGPT <Chip label="beta" color="warning" variant="outlined"/></span>
                        )
                      }
                    />
                  )}
                />
              )}
            </div>
          </div>
        </div>
        <div ref={ref} className="w-full mobile:w-1/2">
          <Lottie
            animationData={Animation}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Lottie animationData={DownArrow} style={{ width: "75px" }} />
      </div>
    </section>
  );
};

export default Hero;
