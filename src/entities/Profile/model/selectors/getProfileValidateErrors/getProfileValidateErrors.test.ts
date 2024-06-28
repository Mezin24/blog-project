import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfile', () => {
  test('should return data', () => {
    const validateErrors: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(
      validateErrors
    );
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
