import Head from "next/head";
import { Stack, Code, Center, Box, Divider } from "@chakra-ui/react";

// components
import { Layout, Hero, Features } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modbus tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Hero />
          <Features />
        </Layout>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
