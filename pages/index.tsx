import Head from "next/head";
import { Stack, Code, Center, Box } from "@chakra-ui/react";

// components
import { Particles, CodeBlock, Loader } from "../components";
import styles from "../styles/Header.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loema tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Particles />
        <CodeBlock />
        <Box bg="gray.900" opacity="0.7">
          <Center h="100px" color="white">
            <Loader />
          </Center>
        </Box>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
