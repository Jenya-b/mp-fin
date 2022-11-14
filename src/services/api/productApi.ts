import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../baseUrl';
import { IArticle, IReport, IReportID } from '../types';

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
    getArticles: builder.query<IArticle[], string>({
      query: (search) => ({
        url: '/Product/GetArticles',
        credentials: 'include',
        params: {
          text: search,
        },
      }),
    }),
    changeArticle: builder.mutation({
      query: (data) => ({
        url: '/Product/SetCostPrices',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});
