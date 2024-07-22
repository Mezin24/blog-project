import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { LOCAL_STORAGE_ARTICLE_VIEW } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';
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
    _init: false,
    limit: 9,
    order: 'asc',
    search: '',
    sort: ArticleSortField.CREATED,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW, payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
      state.order = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
      state.sort = payload;
    },
    init: (state) => {
      const view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_VIEW
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._init = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, { meta }) => {
        state.isLoading = true;
        state.error = undefined;

        if (meta.arg.replace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.hasMore = payload.length > 0;

        if (meta.arg.replace) {
          articlesPageAdapter.setAll(state, payload);
        } else {
          articlesPageAdapter.addMany(state, payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: articlePageActions, reducer: articlePageReducer } =
  articlePageSlice;
