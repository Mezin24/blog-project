import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onReload = () => window.location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h2>{t('Что то пошло не так')}</h2>
      <Button onClick={onReload}>{t('Обновить страницу')}</Button>
    </div>
  );
};
