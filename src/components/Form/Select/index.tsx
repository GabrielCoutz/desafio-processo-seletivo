import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

interface SelectProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLSelectElement>> {
  name: string;
}

export const Select = (props: SelectProps) => {
  return (
    <select
      {...props}
      name={props.name}
      id={props.name}
      className={`p-3 rounded-2xl border border-gray-500 text-gray-400 ${props.className}`}
    >
      {props.children}
    </select>
  );
};
