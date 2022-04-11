import React from "react";

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Text = <T extends React.ElementType>({
  as,
  children,
}: TextProps<T>) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};
