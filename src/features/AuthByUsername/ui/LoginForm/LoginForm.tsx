import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <form className={classnames(cls.LoginForm, {}, [className])}>
      <input type='text' />
      <input type='text' />
      <Button>{t('Войти')}</Button>
    </form>
  );
};
