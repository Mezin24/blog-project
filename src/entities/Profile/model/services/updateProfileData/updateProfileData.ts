import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi;
  const formData = getProfileForm(getState());
  try {
    const { data } = await extra.api.put<Profile>('/profile', formData);
    if (!data) {
      throw new Error('no data');
    }

    if (!data) {
      return rejectWithValue([ValidateProfileError.NO_DATA]);
    }

    const errors = validateProfileData(data);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    return data;
  } catch (error) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
