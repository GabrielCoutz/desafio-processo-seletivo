import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

export const Wrapper = (
  props: PropsWithChildren<HtmlHTMLAttributes<HTMLFormElement>>
) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      {...props}
      className={`bg-white-100 rounded-base py-8 px-6 ${props.className}`}
    >
      {props.children}
    </form>
  );
};
