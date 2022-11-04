import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from './baseUrl';
import {
  IGenericResponse,
  ISigninInputs,
  IRegistrationInputs,
  IPassRecoveryInput,
  IPassReset,
} from './types';

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
    signinUser: builder.mutation<IGenericResponse, ISigninInputs>({
      query: (data) => ({
        url: '/Account/Login',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    signout: builder.mutation<IGenericResponse, void>({
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
    passwordRecovery: builder.mutation<IGenericResponse, IPassRecoveryInput>({
      query: (data) => ({
        url: '/Account/ForgotPassword',
        method: 'POST',
        body: data,
      }),
    }),
    passwordReset: builder.mutation<IGenericResponse, IPassReset>({
      query: (data) => ({
        url: '/Account/ConfirmResetPassword',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useSigninUserMutation,
  useSignoutMutation,
  useIsInSystemUserQuery,
  usePasswordRecoveryMutation,
  usePasswordResetMutation,
} = authApi;
