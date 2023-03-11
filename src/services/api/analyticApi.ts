import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IAnalyticVisualData, IArticleQueries, IFiltersData } from 'services/types';

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
    getArticleQueries: builder.query<IArticleQueries[], string>({
      query: (date) => ({
        url: '/Analytic/GetArticleQueries',
        credentials: 'include',
        params: {
          date,
        },
      }),
    }),
    addSavedArticle: builder.mutation<IArticleQueries, { article: string; query: string }>({
      query: (data) => ({
        url: '/Analytic/AddSavedArticle',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    getAllSavedArticle: builder.query<null, null>({
      query: () => ({
        url: '/Analytic/GetSavedArticlesAndQueries',
        credentials: 'include',
      }),
    }),
  }),
});
