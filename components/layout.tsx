import React, { ReactNode } from "react";
import Head from "next/head";
import Particles from "./particles";

type PropsType = {
  children: ReactNode;
  title: string;
};

function Layout({ children, title }: ReactNode) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Loema Tech - Website"
          href="https://loema.tech/site.xml"
        />
        <title>Loema Technology - {title}</title>
      </Head>
      <Particles />
      {children}
    </>
  );
}

export default Layout;
