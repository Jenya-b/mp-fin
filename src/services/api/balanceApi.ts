import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { setBalance } from 'store/reducers/balanceSlice';
import { baseUrl } from 'services/baseUrl';

export const balanceApi = createApi({
  reducerPath: 'balanceApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBalance: builder.query<number, null>({
      query: () => ({
        url: '/Subscribe/GetBalance',
        credentials: 'include',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBalance(data));
        } catch {
          throw new Error();
        }
      },
    }),
  }),
});
