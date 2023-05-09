import React from "react";

interface ButtonProps {
  children: string;
  className?: string;
}

export const Primary = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`rounded-base bg-primary-400 bg-gradient py-1/2 px-6 text-white-100 shadow-lg shadow-primary-200 ${className}`}
    >
      {children}
    </button>
  );
};
