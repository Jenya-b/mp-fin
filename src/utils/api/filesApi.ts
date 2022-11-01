import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axios';

export const fetchFiles = createAsyncThunk('fetchFilesReport', async (data: FormData, thunkApi) => {
  try {
    const response = await axios.post('/Product/SaveProducts', data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
