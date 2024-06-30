import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesData = (state: StateSchema) =>
  state.articleDetails?.data;
export const getArticlesIsLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading || false;
export const getArticlesError = (state: StateSchema) =>
  state.articleDetails?.error;
