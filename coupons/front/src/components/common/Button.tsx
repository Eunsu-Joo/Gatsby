import React, { CSSProperties } from "react";
import { ReactNode, MouseEvent } from "react";
import ButtonWrapper from "../../styles/button";
interface IButton {
  children: ReactNode | JSX.Element;
  variant?: "default" | "point" | "primary" | "white";
  size: "sm" | "md" | "lg";
  style?: CSSProperties;
  disabled?: boolean;
  execute: (e: MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  spacing?: number;
}

const Button = ({
  children,
  variant,
  size,
  disabled = false,
  style,
  execute,
  value,
  spacing = 2,
}: IButton) => {
  return (
    <ButtonWrapper
      style={style}
      className={`${variant} ${size} spacing-${spacing}`}
      disabled={disabled}
      onClick={execute}
      value={value ?? ""}
    >
      {children}
    </ButtonWrapper>
  );
};
export default Button;
