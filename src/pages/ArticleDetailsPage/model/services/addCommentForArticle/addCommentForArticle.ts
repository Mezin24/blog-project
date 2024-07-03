import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesData } from 'entities/Article/model/selectors/getArticleData';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('addCommentForm/addCommentForArticle', async (text, thunkApi) => {
  const { rejectWithValue, getState, extra, dispatch } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticlesData(getState());

  try {
    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    const { data } = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    dispatch(fetchCommentsByArticleId(article.id));

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
