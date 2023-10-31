import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IArticle, IReport, IReportID } from 'services/types';
import { RootState } from 'store/store';

export const productApi = createApi({
  reducerPath: 'productApi',
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
  endpoints: (builder) => ({
    getReports: builder.query<IReport[], null>({
      query: () => ({
        url: '/Product/GetStates',
      }),
    }),
    deleteReport: builder.mutation<IReport, IReportID>({
      query: (data) => ({
        url: '/Product/DeleteState',
        method: 'POST',
        body: data,
      }),
    }),
    getArticles: builder.query<IArticle[], string>({
      query: (text) => ({
        url: '/Product/GetArticles',
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
      }),
    }),
  }),
});
