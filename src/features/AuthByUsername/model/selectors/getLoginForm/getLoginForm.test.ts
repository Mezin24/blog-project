import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginForm } from './getLoginForm';

describe('getLoginForm', () => {
  test('should return login form', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        username: 'test',
        password: '123',
      },
    };
    expect(getLoginForm(state as StateSchema)).toEqual({
      isLoading: false,
      username: 'test',
      password: '123',
    });
  });
});
