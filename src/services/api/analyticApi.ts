import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IAnalyticVisualData, IFiltersData } from 'services/types';

export const analyticApi = createApi({
  reducerPath: 'analiticApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFiltersData: builder.query<IFiltersData, null>({
      query: () => ({
        url: '/Analytic/GetData',
        credentials: 'include',
      }),
    }),
    postAnalytics: builder.mutation<
      IAnalyticVisualData,
      { weekIds: string[]; articleNames: string[] }
    >({
      query: (data) => ({
        url: '/Analytic/GetAnalyticsNew',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    getArticleQueries: builder.query<null, string>({
      query: (date) => ({
        url: '/Analytic/GetArticleQueries',
        credentials: 'include',
        params: {
          date,
        },
      }),
    }),
  }),
});
