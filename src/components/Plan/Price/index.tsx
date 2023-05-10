import React from "react";

interface PriceProps {
  children: string;
}

export const Price = ({ children }: PriceProps) => {
  return (
    <span className="text-md-1 text-gray-800 font-bold py-3/2 px-6 bg-white-100 rounded-base">
      {children}
    </span>
  );
};
