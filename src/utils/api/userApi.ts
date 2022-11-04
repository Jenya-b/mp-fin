import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenericResponse, IUser } from '../api/types';

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
    changePersonalData: builder.mutation<IGenericResponse, IUser>({
      query: (data) => ({
        url: '/Account/ChangeInfo',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    getAvatar: builder.query<string, null>({
      query: () => ({
        url: '/Account/GetAvatar',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useLazyGetUserQuery, useChangePersonalDataMutation, useLazyGetAvatarQuery } =
  userApi;
