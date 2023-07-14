import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from 'services/baseUrl';
import { getLocalStorage } from 'utils';

const uploadFiles = axios.create({
  baseURL: baseUrl,
});

export const fetchReportFiles = createAsyncThunk(
  'fetchFilesReport',
  async (data: FormData, thunkApi) => {
    try {
      const { token } = getLocalStorage('persist:userReducer');
      if (token) {
        const response = await uploadFiles.post('/Product/SaveProductsNew', data, {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${token.replace(/"/g, '')}`,
          },
        });
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchAvatarFile = createAsyncThunk(
  'fetchAvatarFile',
  async (data: FormData, thunkApi) => {
    try {
      const { token } = getLocalStorage('persist:userReducer');
      if (token) {
        const response = await uploadFiles.post('/Account/ChangeImage', data, {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${token.replace(/"/g, '')}`,
          },
        });
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchWBQueryFile = createAsyncThunk(
  'fetchWBQueryFile',
  async (data: FormData, thunkApi) => {
    try {
      const { token } = getLocalStorage('persist:userReducer');
      if (token) {
        const response = await uploadFiles.post('/Admin/SaveQueryDinamics', data, {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${token.replace(/"/g, '')}`,
          },
        });
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
