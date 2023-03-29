import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { refreshDataUrl } from 'services/baseUrl';

export const refreshDataApi = createApi({
  reducerPath: 'refreshDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: refreshDataUrl }),
  endpoints: (builder) => ({
    updateData: builder.mutation<null, void>({
      query: () => ({
        url: '/refresh',
        method: 'POST',
      }),
    }),
  }),
});
