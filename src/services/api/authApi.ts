import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import {
  IGenericResponse,
  ISigninInputs,
  IRegistrationInputs,
  IPassRecoveryInput,
  IPassReset,
} from 'services/types';
import { balanceApi } from 'services/api/balanceApi';
import { userApi } from 'services/api/userApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getUser.initiate(null));
          await dispatch(balanceApi.endpoints.getBalance.initiate(null));
        } catch {
          throw new Error();
        }
      },
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
