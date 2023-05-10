import React, { PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={poppins.className}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
