import React from "react";

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Text = <T extends React.ElementType>({
  as,
  children,
  ...restProps
}: TextProps<T>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};
