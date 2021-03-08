import Head from "next/head";
import { Stack, Code, Center, Box } from "@chakra-ui/react";

// components
import { Layout, Hero, Features, Services, Contact } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loema Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Hero />
          <Features />
          <Services />
          <Contact />
        </Layout>
      </main>
    </div>
  );
}
