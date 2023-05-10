import React from "react";
import { Button } from "../Button";
import { Logo } from "../Icon/Logo";

export const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-white-100 bg-opacity-90 backdrop-blur-xl	 sticky top-0 z-10">
      <Logo />
      <Button.Primary gradient shadow className="text-sm-9">
        Já sou parceiro
      </Button.Primary>
    </header>
  );
};
