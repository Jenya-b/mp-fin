import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAllUserOptions } from 'services/types';
import { baseUrl } from 'services/baseUrl';
import { setUser } from 'store/reducers/userSlice';
import { RootState } from 'store/store';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).persistedUserReducer.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<IAllUserOptions, null>({
      query: () => ({
        url: '/Account/GetUser',
      }),
      providesTags: ['User'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch {
          throw new Error();
        }
      },
    }),
    editUserInfo: builder.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/Account/EditUserInfo',
        body: data,
      }),
    }),
  }),
});
