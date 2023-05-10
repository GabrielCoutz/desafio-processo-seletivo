import React from "react";
import { ButtonProps } from "..";

export const Primary = ({
  children,
  className,
  fullWidth,
  fullHeight,
  gradient,
  shadow,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-base py-1/2 px-6 text-white-100 
      ${fullWidth ? "w-full" : ""}
      ${fullHeight ? "h-full" : ""}
      ${gradient ? "bg-gradient" : "bg-primary-400"}
      ${shadow ? "shadow-lg shadow-primary-200" : ""}
      ${className}`}
    >
      {children}
    </button>
  );
};
