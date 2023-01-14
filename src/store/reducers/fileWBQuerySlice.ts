import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWBQueryFile } from 'services/api/filesApi';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
};

export const fileWBQuerySlice = createSlice({
  name: 'fileWB',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWBQueryFile.pending.type]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [fetchWBQueryFile.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = true;
      state.isError = false;
    },
    [fetchWBQueryFile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export default fileWBQuerySlice.reducer;
