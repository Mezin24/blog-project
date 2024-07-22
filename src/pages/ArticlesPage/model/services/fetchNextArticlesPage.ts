import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../selectors/getArticlesPageData';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, { getState, dispatch }) => {
  const page = getArticlesPageNum(getState());
  const hasMore = getArticlesPageHasMore(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlePageActions.setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
