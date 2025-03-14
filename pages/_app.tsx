import { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS={true} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
