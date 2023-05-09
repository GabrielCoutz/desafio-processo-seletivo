import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

export const Field = (
  props: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>
) => {
  return (
    <div {...props} className={`mb-5 ${props.className}`}>
      {props.children}
    </div>
  );
};
