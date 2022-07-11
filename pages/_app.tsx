import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
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
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
