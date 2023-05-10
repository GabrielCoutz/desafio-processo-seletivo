import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      className={`flex flex-col items-center bg-white-200 rounded-4xl py-8 px-6 transition border-2 border-white-200 hover:border-gray-300`}
    >
      {children}
    </div>
  );
};
