import { ArticleViewSelector } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Page } from 'shared/UI/Page/Page';
import { classnames } from 'shared/lib/classnames/classnames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/getArticlesPageData';
import { fetchArticlesList } from '../../model/services/fetchArticleList';
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlePage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlePageActions.init());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classnames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
