import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFiles } from '../../api/filesApi';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
};

export const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFiles.pending.type]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [fetchFiles.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = true;
      state.isError = false;
    },
    [fetchFiles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export default fileSlice.reducer;
