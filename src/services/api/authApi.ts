import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'services/baseUrl';
import {
  IGenericResponse,
  ISigninInputs,
  IRegistrationInputs,
  IPassRecoveryInput,
  IPassReset,
  AuthResponse,
} from 'services/types';
import { balanceApi } from 'services/api/balanceApi';
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
