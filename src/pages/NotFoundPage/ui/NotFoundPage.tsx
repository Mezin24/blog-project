import { useTranslation } from 'react-i18next';
import { Page } from 'shared/UI/Page/Page';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classnames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};
