import { authApi } from './api/authApi';
import { productApi } from './api/productApi';
import { userApi } from './api/userApi';
import { balanceApi } from './api/balanceApi';

export const {
  useRegisterUserMutation,
  useSigninUserMutation,
  useSignoutMutation,
  useIsInSystemUserQuery,
  usePasswordRecoveryMutation,
  usePasswordResetMutation,
} = authApi;

export const {
  useGetReportsQuery,
  useDeleteReportMutation,
  useGetArticlesQuery,
  useChangeArticleMutation,
} = productApi;

export const { useLazyGetUserQuery, useChangePersonalDataMutation } = userApi;

export const { useGetBalanceQuery } = balanceApi;
