import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from './baseUrl';
import { IReport, IReportID } from './types';

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
    deleteReport: builder.mutation<IReport, IReportID>({
      query: (data) => ({
        url: '/Product/DeleteState',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetReportsQuery, useDeleteReportMutation } = productApi;
