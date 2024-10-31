import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  className?: string;
}

export const Input = memo(
  ({
    value,
    onChange,
    autofocus,
    type = 'text',
    placeholder,
    className,
    ...otherProps
  }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);
    const onSelect = (e: SyntheticEvent<HTMLInputElement>) =>
      setCaretPosition((e?.target as HTMLInputElement)?.selectionStart || 0);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        inputRef.current?.focus();
      }
    }, [autofocus]);

    return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={styles.caretWrapper}>
          <input
            type={type}
            value={value}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            ref={inputRef}
            className={styles.input}
            {...otherProps}
          />
          {isFocused && (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  },
);
