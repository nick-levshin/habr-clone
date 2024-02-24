import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  children,
  theme = AppLinkTheme.PRIMARY,
  className,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
