import React from "react";

const sizeClasses = {
  txtManropeSemiBold12WhiteA7007f: "font-manrope font-semibold",
  txtManropeRegular1619: "font-manrope font-normal",
  txtManropeMedium16Gray900: "font-manrope font-medium",
  txtManropeRegular20: "font-manrope font-normal",
  txtManropeBold32Black900: "font-bold font-manrope",
  txtManropeMedium20: "font-manrope font-medium",
  txtManropeRegular2429: "font-manrope font-normal",
  txtManropeRegular14: "font-manrope font-normal",
  txtManropeSemiBold2025: "font-manrope font-semibold",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeBold32: "font-bold font-manrope",
  txtManropeSemiBold20Gray900: "font-manrope font-semibold",
  txtManropeSemiBold1619: "font-manrope font-semibold",
  txtManropeSemiBold2429: "font-manrope font-semibold",
  txtRobotoRomanRegular4165: "font-normal font-roboto",
  txtManropeBold24Gray900: "font-bold font-manrope",
  txtManropeBold3238: "font-bold font-manrope",
  txtManropeBold48: "font-bold font-manrope",
  txtFiraSansSemiBold1265: "font-firasans font-semibold",
  txtManropeRegular16Gray900: "font-manrope font-normal",
  txtManropeExtraBold24: "font-extrabold font-manrope",
  txtFiraSansSemiBold1265Orange300: "font-firasans font-semibold",
  txtManropeBold20: "font-bold font-manrope",
  txtManropeSemiBold162: "font-manrope font-semibold",
  txtManropeRegular162: "font-manrope font-normal",
  txtFiraSansRegular93: "font-firasans font-normal",
  txtManropeRegular1836: "font-manrope font-normal",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeRegular14Gray9007f: "font-manrope font-normal",
  txtManropeSemiBold12: "font-manrope font-semibold",
  txtFiraSansSemiBold20: "font-firasans font-semibold",
  txtManropeBold12: "font-bold font-manrope",
  txtManropeRegular243: "font-manrope font-normal",
  txtManropeRegular16Gray9007f01: "font-manrope font-normal",
  txtFiraSansRegular2603: "font-firasans font-normal",
  txtManropeSemiBold20Gray90001: "font-manrope font-semibold",
  txtManropeExtraBold32: "font-extrabold font-manrope",
  txtManropeBold324: "font-bold font-manrope",
  txtManropeRegular16Black900: "font-manrope font-normal",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtManropeRegular32: "font-manrope font-normal",
  txtManropeRegular24: "font-manrope font-normal",
  txtManropeMedium12: "font-manrope font-medium",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeSemiBold24: "font-manrope font-semibold",
  txtFiraSansSemiBold1644Orange300: "font-firasans font-semibold",
  txtManropeMedium16: "font-manrope font-medium",
  txtFiraSansSemiBold1644: "font-firasans font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
