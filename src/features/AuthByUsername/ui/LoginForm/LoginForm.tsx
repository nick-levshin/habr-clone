import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');

  const onChange = (value: string) => {
    setName(value);
  };

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        type="text"
        value={name}
        onChange={onChange}
        placeholder={t('Enter username')}
        autofocus
        className={styles.input}
      />
      <Input
        type="password"
        placeholder={t('Enter password')}
        className={styles.input}
      />
      <Button className={styles.loginBtn}>{t('Sign In')}</Button>
    </div>
  );
};
