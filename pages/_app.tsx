import React from "react";
import animationData from "../public/lf30_editor_fz5fsybt.json";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Lottie from "react-lottie";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setLoaded] = React.useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: "ngo",
    },

    palette: {
      mode: "light",
      secondary: {
        main: "#FF6347",
        light: "#ff6347c9",
      },
      primary: {
        main: "#0BF6A2",
        light: "#0bf6a4db",
      },
    },
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  React.useEffect(() => {
    window.onload = (e) => {
      setLoaded(true);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 100,
          background: "#fff",
          display: isLoaded ? "grid" : "none",
          placeContent: "center",
        }}
      >
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </Box>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
