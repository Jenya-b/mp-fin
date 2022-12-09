import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IAnaliticOwn } from 'services/types';

export const analiticApi = createApi({
  reducerPath: 'analiticApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOwnData: builder.query<IAnaliticOwn, null>({
      query: () => ({
        url: '/Analytic/GetData',
        credentials: 'include',
      }),
    }),
    getOwnAnalitic: builder.mutation({
      query: (data) => ({
        url: '/Analytic/GetAnalytics',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});
