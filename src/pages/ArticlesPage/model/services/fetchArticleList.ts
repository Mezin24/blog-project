import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/getArticlesPageData';

interface FetchArticlesListProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticleList', async (props, thunkApi) => {
  const { extra, getState, rejectWithValue } = thunkApi;
  const { page } = props;
  try {
    const limit = getArticlesPageLimit(getState());

    const { data } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
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
