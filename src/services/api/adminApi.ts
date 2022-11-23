import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IWeek, IWeekWithParam, IGenericResponse, IUsersInAdminPanel } from 'services/types';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Weeks', 'Users'],
  endpoints: (builder) => ({
    getWeeks: builder.query<IWeekWithParam[], null>({
      query: () => ({
        url: '/Week',
        credentials: 'include',
      }),
      providesTags: ['Weeks'],
    }),
    createWeek: builder.mutation<IGenericResponse, IWeek>({
      query: (data) => ({
        url: '/Week/Create',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      invalidatesTags: ['Weeks'],
    }),
    getAdminPanelUsers: builder.query<IUsersInAdminPanel[], null>({
      query: () => ({
        url: '/Admin/GetUsers',
        credentials: 'include',
      }),
      providesTags: ['Users'],
    }),
    appointAdmin: builder.mutation<IGenericResponse, string>({
      query: (userEmail) => ({
        url: '/Admin/AddAdmin',
        method: 'POST',
        params: {
          userEmail,
        },
        credentials: 'include',
      }),
      invalidatesTags: ['Users'],
    }),
    removeAdminRights: builder.mutation<IGenericResponse, string>({
      query: (userEmail) => ({
        url: '/Admin/DeleteAdmin',
        method: 'POST',
        params: {
          userEmail,
        },
        credentials: 'include',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});
