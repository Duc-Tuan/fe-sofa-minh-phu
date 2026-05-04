import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function DefautlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DefautlLayout;
