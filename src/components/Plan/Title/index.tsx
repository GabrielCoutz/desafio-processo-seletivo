import React from "react";

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  return <h4 className="text-md-2 text-gray-800 font-bold">{children}</h4>;
};
