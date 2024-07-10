import { ArticleView } from 'entities/Article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

describe('initArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlePage: {
        ids: [],
        entities: {},
        hasMore: true,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
        _init: false,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });

  test('initArticlesPage not called when inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlePage: {
        ids: [],
        entities: {},
        hasMore: false,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
        _init: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
