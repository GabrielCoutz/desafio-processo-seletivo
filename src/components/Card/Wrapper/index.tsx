import React, { PropsWithChildren } from "react";

interface WrapperProps {
  children: React.ReactNode;
  border?: boolean;
}

export const Wrapper = ({ children, border }: WrapperProps) => {
  return (
    <div
      className={`flex flex-col items-center bg-white-200 rounded-4xl py-8 px-6 ${
        border ? "border-2 border-gray-300" : ""
      }`}
    >
      {children}
    </div>
  );
};
