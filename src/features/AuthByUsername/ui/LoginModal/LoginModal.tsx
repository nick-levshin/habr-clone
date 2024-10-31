import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(styles.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
