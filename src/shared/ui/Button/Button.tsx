import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  theme,
  square,
  size,
  disabled,
  className,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(styles.Button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
