import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import {
  IAnalyticVisualData,
  IArticleQueries,
  IFiltersData,
  IGenericResponse,
  ISavedArticles,
  IWbReportsResponse,
} from 'services/types';
import { RootState } from 'store/store';

export const analyticApi = createApi({
  reducerPath: 'analiticApi',
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
    getAllSavedArticle: builder.query<ISavedArticles[], null>({
      query: () => ({
        url: '/Analytic/GetSavedArticlesAndQueries',
        credentials: 'include',
      }),
    }),
    deleteSavedArticle: builder.mutation<IGenericResponse, { id: string }>({
      query: ({ id }) => ({
        url: '/Analytic/DeleteSavedArticle',
        method: 'POST',
        credentials: 'include',
        params: {
          id,
        },
      }),
    }),
    getWbApiReports: builder.query<IWbReportsResponse, null>({
      query: () => ({
        url: '/Analytic/GetWbApiReports',
        credentials: 'include',
      }),
    }),
    addWbToken: builder.mutation<IGenericResponse, string>({
      query: (token) => ({
        url: '/Analytic/AddWbToken',
        method: 'POST',
        credentials: 'include',
        params: {
          token,
        },
      }),
    }),
    editWbToken: builder.mutation<IGenericResponse, string>({
      query: (token) => ({
        url: '/Analytic/EditWbToken',
        method: 'POST',
        credentials: 'include',
        params: {
          token,
        },
      }),
    }),
    isTokenSaved: builder.query({
      query: () => ({
        url: '/Analytic/IsTokenSaved',
        credentials: 'include',
      }),
    }),
  }),
});
