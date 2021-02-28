import Head from "next/head";
import { Stack, Code } from "@chakra-ui/react";

// components
import { Particles, CodeBlock } from "../components";

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
      </main>

      <footer>Footer</footer>
    </div>
  );
}
