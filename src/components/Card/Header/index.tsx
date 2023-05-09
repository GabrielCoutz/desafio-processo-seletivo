import React from "react";

interface HeaderProps {
  children: string;
}

export const Header = ({ children }: HeaderProps) => {
  return <h3 className="text-gray-800 text-md-1 font-semibold">{children}</h3>;
};
