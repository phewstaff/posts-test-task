import React from "react";
import "./Layout.scss";
import Header from "../ui/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
