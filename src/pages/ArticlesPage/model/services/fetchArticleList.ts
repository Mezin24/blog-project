import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from '../selectors/getArticlesPageData';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticleList', async (props, thunkApi) => {
  const { extra, getState, rejectWithValue } = thunkApi;
  try {
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNum(getState());

    const { data } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _order: order,
        _sort: sort,
        q: search,
      },
    });

    if (!data) {
      throw new Error('no data');
    }

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
