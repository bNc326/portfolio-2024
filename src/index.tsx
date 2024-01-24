import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { huHU } from "@mui/material/locale";
import { OpenAIContextProvider } from "./context/OpenaiContext";
import { ParallaxProvider } from "react-scroll-parallax";
import { SnackbarProvider, closeSnackbar } from "notistack";
import {MdClose} from "react-icons/md"
import { IconButton } from "@mui/material";

const MUI = createTheme(
  {
    palette: {
      mode: "dark",
      primary: { ...grey, main: grey[600] },
    },
  },
  huHU
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={MUI}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        action={(snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <MdClose color="white" />
          </IconButton>
        )}
      >
        <OpenAIContextProvider>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </OpenAIContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
