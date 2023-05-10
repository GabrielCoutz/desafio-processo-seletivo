import React, { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="p-10 bg-white-200 rounded-4xl">{children}</div>;
};
