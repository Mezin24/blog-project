import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  return (
    <div className={classnames(cls.articleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  );
};
export default memo(ArticleDetailsPage);
