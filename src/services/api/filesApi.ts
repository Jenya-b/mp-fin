import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from 'services/baseUrl';

const uploadFiles = axios.create({
  baseURL: baseUrl,
  headers: {
    'content-type': 'multipart/form-data',
  },
  withCredentials: true,
});

export const fetchReportFiles = createAsyncThunk(
  'fetchFilesReport',
  async (data: FormData, thunkApi) => {
    try {
      const response = await uploadFiles.post('/Product/SaveProductsNew', data);
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
      const response = await uploadFiles.post('/Account/ChangeImage', data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchWBQueryFile = createAsyncThunk(
  'fetchWBQueryFile',
  async (data: FormData, thunkApi) => {
    try {
      const response = await uploadFiles.post('/Admin/SaveWBQuery', data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
