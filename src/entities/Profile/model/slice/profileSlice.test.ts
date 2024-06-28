import { DeepPartial } from '@reduxjs/toolkit';
import {
  profileReducer,
  profileActions,
} from 'entities/Profile/model/slice/profileSlice';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

describe('profileSlice', () => {
  const data = {
    name: 'Pavel',
    username: 'Mezin24',
    age: 37,
    city: 'Obninsk',
    country: Country.ARMENIA,
    currency: Currency.RUB,
    lastname: 'Test',
  };

  test('set read only', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });
  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        ...data,
        lastname: 'dsndj',
      },
      readonly: false,
    };
    expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateErrors: [],
    });
  });
  test('update username', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        lastname: 'mdsnkf',
      },
    };
    expect(
      profileReducer(
        state,
        profileActions.updateProfile({ lastname: 'updated' })
      )
    ).toEqual({
      form: {
        lastname: 'updated',
      },
    });
  });
  test('test update profile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
      ],
    };
    expect(profileReducer(state, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: [],
    });
  });
  test('test update profile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(state, updateProfileData.fulfilled(data, ''))
    ).toEqual({
      isLoading: false,
      validateErrors: [],
      readonly: true,
      data,
      form: data,
    });
  });
});
