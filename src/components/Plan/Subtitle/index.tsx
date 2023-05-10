import React from "react";

interface SubtitleProps {
  children: string;
}

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <p className="text-base-3 text-gray-600 font-medium -mt-1">{children}</p>
  );
};
