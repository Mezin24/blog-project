import { ArticleViewSelector } from 'entities/Article';
import { getArticlesIsLoading } from 'entities/Article/model/selectors/getArticleData';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
  getArticlesPageError,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageData';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { classnames } from 'shared/lib/classnames/classnames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticleList';
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';

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
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(articlePageActions.init());
    dispatch(fetchArticlesList());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classnames(cls.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
