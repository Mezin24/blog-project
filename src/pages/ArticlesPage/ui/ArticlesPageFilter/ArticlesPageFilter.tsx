import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageData';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classnames } from 'shared/lib/classnames/classnames';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/UI/Card/Card';
import { Input } from 'shared/UI/Input/Input';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter: FC<ArticlesPageFilterProps> = memo(
  (props: ArticlesPageFilterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (view: ArticleSortField) => {
        dispatch(articlePageActions.setSort(view));
      },
      [dispatch]
    );

    const onChangeOrder = useCallback(
      (order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order));
      },
      [dispatch]
    );

    return (
      <div className={classnames(cls.ArticlesPageFilter, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            orderField={order}
            sortField={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onChangeView={onChangeView} />
        </div>
        <Card className={cls.search}>
          <Input placeholder={t('Поиск')} />
        </Card>
      </div>
    );
  }
);
