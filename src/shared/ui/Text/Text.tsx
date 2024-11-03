import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  title?: string;
  text?: string;
  theme?: TextTheme;
  className?: string;
}

export const Text: FC<TextProps> = ({
  title,
  text,
  theme = TextTheme.PRIMARY,
  className,
}) => {
  return (
    <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
