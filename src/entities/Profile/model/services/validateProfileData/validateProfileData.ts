import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (
  profile?: Profile
): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const errors: ValidateProfileError[] = [];
  const { name, lastname, age, country } = profile;

  if (!name || !lastname) {
    errors.push(ValidateProfileError.INVALID_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
