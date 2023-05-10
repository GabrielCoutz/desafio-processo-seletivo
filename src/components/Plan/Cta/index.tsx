import React, { PropsWithChildren } from "react";

export const Cta = ({ children }: PropsWithChildren) => {
  return <div className="h-14 mt-2">{children}</div>;
};
