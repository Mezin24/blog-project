import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { LOCAL_STORAGE_ARTICLE_VIEW } from 'shared/const/localStorage';
import { fetchArticlesList } from '../services/fetchArticleList';
import { ArticlePageSchema } from '../types/articlePageSchema';

const articlesPageAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesPageAdapter.getInitialState()
);

const articlePageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesPageAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
    view: ArticleView.BIG,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW, payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    init: (state) => {
      const view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_VIEW
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, { payload }: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesPageAdapter.addMany(state, payload);
          state.hasMore = payload.length > 0;
        }
      )
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: articlePageActions, reducer: articlePageReducer } =
  articlePageSlice;
