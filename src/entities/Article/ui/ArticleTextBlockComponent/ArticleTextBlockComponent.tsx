import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames(cls.articleTextBlockComponent, {}, [className])}>
      ArticleTextBlockComponent
    </div>
  );
};
