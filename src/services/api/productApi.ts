import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IArticle, IReport, IReportID, IWbQueries } from 'services/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
      query: (text) => ({
        url: '/Product/GetArticles',
        credentials: 'include',
        params: {
          text,
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
    getWbQueries: builder.query<IWbQueries[], string>({
      query: (text) => ({
        url: '/Product/GetWbQueries',
        credentials: 'include',
        params: {
          text,
        },
      }),
    }),
  }),
});
