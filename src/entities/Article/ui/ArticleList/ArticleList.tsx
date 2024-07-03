import { FC, memo } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo(
  (props: ArticleListProps) => {
    const { className, view = ArticleView.BIG, articles, isLoading } = props;

    if (isLoading) {
      return (
        <div
          className={classnames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {new Array(view === ArticleView.BIG ? 3 : 9)
            .fill(0)
            .map((item, index) => (
              <ArticleListItemSkeleton view={view} key={index} />
            ))}
        </div>
      );
    }

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
