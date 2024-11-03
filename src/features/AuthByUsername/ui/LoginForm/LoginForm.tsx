import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLogin } from '../../model/selectors/getLogin/getLogin';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getLogin);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        value={username}
        onChange={onChangeUsername}
        placeholder={t('Enter username')}
        autofocus
        className={styles.input}
      />
      <Input
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder={t('Enter password')}
        className={styles.input}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        className={styles.loginBtn}
      >
        {t('Sign In')}
      </Button>
    </div>
  );
});
