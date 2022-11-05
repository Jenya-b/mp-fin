import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReportFiles } from '../../api/filesApi';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
};

export const fileReportSlice = createSlice({
  name: 'filesReport',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReportFiles.pending.type]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [fetchReportFiles.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = true;
      state.isError = false;
    },
    [fetchReportFiles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export default fileReportSlice.reducer;
