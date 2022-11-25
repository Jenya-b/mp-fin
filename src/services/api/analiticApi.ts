import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { smartanalyticsApi } from 'services/baseUrl';
import { IIframeSSOResponse } from 'services/types';

export const analiticApi = createApi({
  reducerPath: 'analiticApi',
  baseQuery: fetchBaseQuery({ baseUrl: smartanalyticsApi }),
  endpoints: (builder) => ({
    getSmartDataSSO: builder.query({
      query: ({ email, hash, timestamp }) => ({
        url: '/api/sso/',
        params: {
          email,
          hash,
          project_id: process.env.REACT_APP_SMARTANALITIC_PROJECT_ID,
          timestamp,
        },
      }),
      transformResponse: (response: IIframeSSOResponse) => response.hash,
    }),
  }),
});
