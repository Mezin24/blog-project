import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticlesData,
  getArticlesError,
  getArticlesIsLoading,
} from './getArticleData';

describe('getArticleData', () => {
  test('should return article data', () => {
    const data = {
      id: '1',
      title: 'Test',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticlesData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };
    expect(getArticlesData(state as StateSchema)).toEqual(undefined);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticlesIsLoading(state as StateSchema)).toBe(true);
  });
  test('should return isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticlesIsLoading(state as StateSchema)).toEqual(false);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'true',
      },
    };
    expect(getArticlesError(state as StateSchema)).toBe('true');
  });
  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticlesError(state as StateSchema)).toEqual(undefined);
  });
});
