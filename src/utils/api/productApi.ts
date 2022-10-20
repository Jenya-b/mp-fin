import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from './baseUrl';
import { IReport } from './types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getReports: builder.query<IReport[], null>({
      query: () => ({
        url: '/Product/GetStates',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetReportsQuery } = productApi;
