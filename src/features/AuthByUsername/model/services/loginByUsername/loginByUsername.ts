import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify(response.data)
      );

      extra.navigate('/about');
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
