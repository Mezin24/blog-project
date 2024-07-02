import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo(
  (props: ArticleListProps) => {
    const { className, view = ArticleView.BIG, articles, isLoading } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
      <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
      <div className={classnames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles?.map(renderArticle)}
      </div>
    );
  }
);
