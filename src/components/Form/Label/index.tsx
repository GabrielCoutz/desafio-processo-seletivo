import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

interface LabelProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLLabelElement>> {
  htmlFor: string;
}

export const Label = (props: LabelProps) => {
  return (
    <label
      {...props}
      htmlFor={props.htmlFor}
      className={`text-gray-800 text-sm-3 block font-medium mb-1/2 ${props.className}`}
    >
      {props.children}
    </label>
  );
};
