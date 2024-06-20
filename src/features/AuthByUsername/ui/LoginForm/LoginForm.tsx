import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import { Text, TextTheme } from 'shared/UI/Text/Text';
import { classnames } from 'shared/lib/classnames/classnames';
import { getLoginForm } from '../../model/selectors/getLoginForm/getLoginForm';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password, isLoading, error } = useSelector(getLoginForm);
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onClickLogin = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <form className={classnames(cls.LoginForm, {}, [className])}>
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        value={username}
        placeholder={t('Введите username')}
        type='text'
        autoFocus
        onChange={onChangeUsername}
      />
      <Input
        value={password}
        placeholder={t('Введите пароль')}
        type='text'
        onChange={onChangePassword}
      />
      <Button
        onClick={onClickLogin}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </form>
  );
});
