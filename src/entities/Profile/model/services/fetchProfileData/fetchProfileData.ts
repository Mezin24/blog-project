import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { dispatch, rejectWithValue, extra } = thunkApi;
  try {
    const { data } = await extra.api.get<Profile>('/profile');
    if (!data) {
      throw new Error('no data');
    }

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
