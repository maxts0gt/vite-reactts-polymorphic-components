import React from "react";

type randomColors = "yellow" | "orange" | "green" | "teal";

type TextProps<T extends React.ElementType> = {
  as?: T;
  color?: randomColors | "black";
};

type Props<T extends React.ElementType> = React.PropsWithChildren<
  TextProps<T>
> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

export const Text = <T extends React.ElementType = "span">({
  as,
  style,
  color,
  children,
  ...restProps
}: Props<T>) => {
  const Component = as || "span";

  const internalStyles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
