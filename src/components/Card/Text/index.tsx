import React from "react";

interface TextProps {
  children: string;
}

export const Text = ({ children }: TextProps) => {
  return <p className="text-base-1 text-gray-800 -mt-4">{children}</p>;
};
