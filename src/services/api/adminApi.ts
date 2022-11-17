import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IWeek, IWeekWithParam, IGenericResponse } from 'services/types';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Weeks'],
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
  }),
});
