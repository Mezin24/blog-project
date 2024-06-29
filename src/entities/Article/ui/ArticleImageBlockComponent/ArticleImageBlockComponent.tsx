import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classnames(cls.articleImageBlockComponent, {}, [className])}
    >
      ArticleImageBlockComponent
    </div>
  );
};
