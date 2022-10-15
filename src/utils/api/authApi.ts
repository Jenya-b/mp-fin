import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from './baseUrl';
import { IGenericResponse, ISigninInputs, IRegistrationInputs } from './types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, IRegistrationInputs>({
      query: (data) => ({
        url: '/Account/Register',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    signinUser: builder.mutation<{ token: string; status: string }, ISigninInputs>({
      query: (data) => ({
        url: '/Account/Login',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    signout: builder.mutation<void, void>({
      query: () => ({
        url: '/Account/Logout',
        method: 'POST',
        credentials: 'include',
      }),
    }),
    isInSystemUser: builder.query<string, null>({
      query: () => ({
        url: '/Account/IsInSystem',
        credentials: 'include',
      }),
      transformResponse: (response: IGenericResponse) => response.message,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useSigninUserMutation,
  useSignoutMutation,
  useIsInSystemUserQuery,
} = authApi;
