import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from './baseUrl';
import { IGenericResponse, ISigninInputs, IRegistrationInputs } from './types';
import { userApi } from './userApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, IRegistrationInputs>({
      query: (data) => ({
        url: '/Account/Register',
        method: 'POST',
        body: data,
      }),
    }),
    signinUser: builder.mutation<{ token: string; status: string }, ISigninInputs>({
      query: (data) => ({
        url: '/Account/Login',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getUser.initiate(null));
        } catch (error) {}
      },
    }),
    signout: builder.mutation<void, void>({
      query: () => ({
        url: '/Account/Logout',
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useSigninUserMutation, useSignoutMutation } = authApi;
