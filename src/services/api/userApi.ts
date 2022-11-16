import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenericResponse, IAllUserOptions, IUserSettings } from 'services/types';
import { baseUrl } from 'services/baseUrl';
import { setUser } from 'store/reducers/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<IAllUserOptions, null>({
      query: () => ({
        url: '/Account/GetUser',
        credentials: 'include',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch {
          throw new Error();
        }
      },
    }),
    changePersonalData: builder.mutation<IGenericResponse, IUserSettings>({
      query: (data) => ({
        url: '/Account/ChangeInfo',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});
