import { ArticleView } from 'entities/Article';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticleList';

jest.mock('./fetchArticleList');

describe('fetchNextArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        ids: [],
        entities: {},
        hasMore: true,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  test('fetchArticlesList not called when no more articles', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        ids: [],
        entities: {},
        hasMore: false,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('fetchArticlesList not called when no more loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        ids: [],
        entities: {},
        hasMore: true,
        page: 2,
        limit: 5,
        isLoading: true,
        view: ArticleView.SMALL,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
