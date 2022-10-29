import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFiles } from '../../api/filesApi';

const initialState = {
  isLoading: false,
  error: '',
};

export const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFiles.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFiles.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [fetchFiles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default fileSlice.reducer;
