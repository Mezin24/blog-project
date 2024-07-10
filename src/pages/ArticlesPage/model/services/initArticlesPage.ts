import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticlesPageInit } from '../selectors/getArticlesPageData';
import { articlePageActions } from '../slice/articlePageSlice';
import { fetchArticlesList } from './fetchArticleList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, { dispatch, getState }) => {
  const inited = getArticlesPageInit(getState());
  if (!inited) {
    dispatch(articlePageActions.init());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  }
});
