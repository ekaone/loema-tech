import Head from "next/head";
import { Stack, Code, Center, Box } from "@chakra-ui/react";

// components
import { Layout, Hero, Features, Services, Contact } from "../components";

export default function Home() {
  return (
    <div>
      <main>
        <Layout title={"Home"}>
          <Hero />
          <Features />
          <Services />
          <Contact />
        </Layout>
      </main>
    </div>
  );
}
