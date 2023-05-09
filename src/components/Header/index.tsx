import React from "react";
import { Button } from "../Button";
import { Logo } from "../Icon/logo";

export const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <Logo />
      <Button.Primary gradient shadow className="text-sm-9">
        Já sou parceiro
      </Button.Primary>
    </header>
  );
};
