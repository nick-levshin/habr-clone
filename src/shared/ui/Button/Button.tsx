import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: ThemeButton;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
