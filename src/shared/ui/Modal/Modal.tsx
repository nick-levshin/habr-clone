import {
  FC,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeHandler = useCallback(
    (e?: KeyboardEvent<HTMLDivElement>) => {
      if (!onClose) return;
      if (!e || e.key === 'Escape') {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, ANIMATION_DELAY);
      }
    },
    [onClose],
  );
  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      overlayRef.current.focus();
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <div className={classNames(styles.Modal, mods, [className])}>
      <div
        ref={overlayRef}
        className={styles.overlay}
        onClick={_e => closeHandler()}
        onKeyDown={closeHandler}
        role="button"
        tabIndex={0}
      >
        <div
          className={styles.content}
          onClick={onContentClick}
          role="presentation"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
