import { NativeBaseProvider, extendTheme } from "native-base";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
