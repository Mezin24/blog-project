import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames(cls.articleCodeBlockComponent, {}, [className])}>
      ArticleCodeBlockComponent
    </div>
  );
};
