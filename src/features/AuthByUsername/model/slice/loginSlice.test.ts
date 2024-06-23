import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, loginActions } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('changed'))
    ).toEqual({ username: 'changed' });
  });
  test('should set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('changed'))
    ).toEqual({ password: 'changed' });
  });
});
