import React from "react";

export const Text = <T extends React.ElementType>({
  as,
  children,
}: {
  as?: T;
  children: React.ReactNode;
}) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};
