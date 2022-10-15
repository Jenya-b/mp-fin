import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../api/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, null>({
      query: () => ({
        url: '/Account/GetUser',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useLazyGetUserQuery } = userApi;
