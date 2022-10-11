import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../interfaces/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser, string>({
      query: () => '/Account/GetUser',
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
