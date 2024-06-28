import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
  const data = {
    name: 'Pavel',
    username: 'Mezin24',
    age: 37,
    city: 'Obninsk',
    country: Country.ARMENIA,
    currency: Currency.RUB,
    lastname: 'Test',
  };

  test('success, no errors', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('invalid name', () => {
    const result = validateProfileData({ ...data, name: '' });
    expect(result).toEqual([ValidateProfileError.INVALID_USER_DATA]);
  });

  test('invalid lastname', () => {
    const result = validateProfileData({ ...data, lastname: '' });
    expect(result).toEqual([ValidateProfileError.INVALID_USER_DATA]);
  });

  test('invalid age', () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('invalid country', () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('invalid all fields', () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
      lastname: '',
      age: undefined,
    });
    expect(result).toEqual([
      ValidateProfileError.INVALID_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('no data', () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
