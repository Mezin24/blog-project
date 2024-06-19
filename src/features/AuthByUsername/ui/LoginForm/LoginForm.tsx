import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <form className={classnames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('Введите username')} type='text' />
      <Input placeholder={t('Введите пароль')} type='text' autoFocus />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </form>
  );
};
