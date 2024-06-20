import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  password: '',
  username: '',
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.error = '';
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
