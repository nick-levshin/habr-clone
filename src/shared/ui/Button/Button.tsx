import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  ...otherProps
}) => (
  <button
    type="button"
    className={classNames(styles.Button, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
