import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollSave: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSaveActions, reducer: scrolSaveReducer } =
  scrollSaveSlice;
