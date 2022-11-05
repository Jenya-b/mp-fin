import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenericResponse, IUser } from '../api/types';
import { setUser } from '../store/reducers/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, null>({
      query: () => ({
        url: '/Account/GetUser',
        credentials: 'include',
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    changePersonalData: builder.mutation<IGenericResponse, IUser>({
      query: (data) => ({
        url: '/Account/ChangeInfo',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useLazyGetUserQuery, useChangePersonalDataMutation } = userApi;
