import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-900_01",
    gray_900_01: "bg-gray-900_01 text-white-A700",
  },
  outline: {
    gray_900_01: "border border-gray-900_01 border-solid",
    deep_purple_A200_01_light_blue_A400_01:
      "border border-solid deep_purple_A200_01_light_blue_A400_01_border",
  },
} as const;
const sizes = {
  xs: "p-1.5",
  sm: "p-2.5",
  md: "p-[15px]",
  lg: "px-[17px] py-[19px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
