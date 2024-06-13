import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onReload = () => window.location.reload();

  return (
    <div className={classnames(cls.PageError, {}, [className])}>
      <h2>{t('Что то пошло не так')}</h2>
      <Button onClick={onReload}>{t('Обновить страницу')}</Button>
    </div>
  );
};
