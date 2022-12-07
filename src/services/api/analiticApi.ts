import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IAnaliticOwn } from 'services/types';

export const analiticApi = createApi({
  reducerPath: 'analiticApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAnaliticOwnData: builder.query<IAnaliticOwn, null>({
      query: () => ({
        url: '/Analytic/Get',
        credentials: 'include',
      }),
    }),
  }),
});
