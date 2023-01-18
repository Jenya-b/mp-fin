import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IAnaliticVisualData, IFiltersData } from 'services/types';

export const analiticApi = createApi({
  reducerPath: 'analiticApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFiltersData: builder.query<IFiltersData, null>({
      query: () => ({
        url: '/Analytic/GetData',
        credentials: 'include',
      }),
    }),
    postAnalitics: builder.mutation<
      IAnaliticVisualData,
      { weekIds: string[]; articleNames: string[] }
    >({
      query: (data) => ({
        url: '/Analytic/GetAnalyticsNew',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});
