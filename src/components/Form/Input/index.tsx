import React, { HtmlHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  id: string;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      name={props.id}
      id={props.id}
      type={props.type}
      className={`px-4 py-3/2 text-sm-5 border border-gray-500 rounded-2xl w-full ${props.className}`}
    />
  );
};
