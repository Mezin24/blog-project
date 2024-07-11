import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlePage?.error;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlePage?.view || ArticleView.BIG;
export const getArticlesPageNum = (state: StateSchema) =>
  state.articlePage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlePage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlePage?.hasMore;
export const getArticlesPageInit = (state: StateSchema) =>
  state.articlePage?._init;
export const getArticlesPageSort = (state: StateSchema) =>
  state.articlePage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageOrder = (state: StateSchema) =>
  state.articlePage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlePage?.search || '';
