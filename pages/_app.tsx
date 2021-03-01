import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Loema tech"
          href="https://loema.tech/blog.xml"
        />
      </Head>
      <ChakraProvider resetCSS={false} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
