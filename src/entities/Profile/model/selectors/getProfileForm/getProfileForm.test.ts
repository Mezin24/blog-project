import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return data', () => {
    const data = {
      name: 'Pavel',
      username: 'Mezin24',
      age: 37,
      city: 'Obninsk',
      country: Country.ARMENIA,
      currency: Currency.RUB,
      lastname: 'Test',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
