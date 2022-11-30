import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAvatarFile } from 'services/api/filesApi';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
};

export const fileAvatarSlice = createSlice({
  name: 'fileAvatar',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAvatarFile.pending.type]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [fetchAvatarFile.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = true;
      state.isError = false;
    },
    [fetchAvatarFile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export default fileAvatarSlice.reducer;
