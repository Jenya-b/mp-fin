import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axios';

export const fetchReportFiles = createAsyncThunk(
  'fetchFilesReport',
  async (data: FormData, thunkApi) => {
    try {
      const response = await axios.post('/Product/SaveProducts', data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchAvatarFile = createAsyncThunk(
  'fetchAvatarFile',
  async (data: FormData, thunkApi) => {
    try {
      const response = await axios.post('/Account/ChangeImage', data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
