import React, { ReactNode } from "react";
import Particles from "./particles";

type PropsType = {
  children: ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <div>
      <Particles />
      {children}
    </div>
  );
}

export default Layout;
