import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t('Sign In')}
      </Button>
      {/* eslint-disable */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
        hic! Repudiandae unde provident veritatis, nam iusto voluptatibus fugit
        quo cum, earum culpa laboriosam repellendus? Odio, cupiditate officia
        consequatur aperiam assumenda quis fugit quibusdam unde minus quaerat
        sapiente eum cum quos, alias iste dolorem corrupti magni omnis obcaecati
        vero quidem repellat.
      </Modal>
    </div>
  );
};
