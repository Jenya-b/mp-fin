import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import { IGenericResponse, ISigninInputs, IRegistrationInputs, AuthResponse } from 'services/types';
import { userApi } from 'services/api/userApi';
import { setAuthData } from 'store/reducers/userSlice';
import { RootState } from 'store/store';

export const authApi = createApi({
  reducerPath: 'authApi',
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
    registerUser: builder.mutation<AuthResponse, IRegistrationInputs>({
      query: (data) => ({
        url: '/Account/Register',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { token, expiration },
          } = await queryFulfilled;
          dispatch(setAuthData({ token, expiration }));
        } catch {
          throw new Error();
        }
      },
    }),
    signinUser: builder.mutation<AuthResponse, ISigninInputs>({
      query: (data) => ({
        url: '/Account/Login',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { token, expiration },
          } = await queryFulfilled;
          dispatch(setAuthData({ token, expiration }));
        } catch {
          throw new Error();
        }
      },
    }),
    isInSystemUser: builder.query<string, null>({
      query: () => ({
        url: '/Account/IsInSystem',
      }),
      transformResponse: (response: IGenericResponse) => response.message,
    }),
  }),
});
