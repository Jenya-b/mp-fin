import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../api/types';
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
      // transformResponse: (result: { data: { user: IUser } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
