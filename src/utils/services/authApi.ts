import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../../constants/api';
import { IGenericResponse, IRegistrationResponse } from '../apiTypes';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, IRegistrationResponse>({
      query: (data) => ({
        url: '/Account/Register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
