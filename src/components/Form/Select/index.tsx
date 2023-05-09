import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

export const Select = (
  props: PropsWithChildren<HtmlHTMLAttributes<HTMLSelectElement>>
) => {
  return (
    <select
      {...props}
      className={`bg-gray-200 rounded-2xl p-3 text-gray-400 ${props.className}`}
    >
      {props.children}
    </select>
  );
};
