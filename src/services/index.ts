import { authApi } from 'services/api/authApi';
import { productApi } from 'services/api/productApi';
import { userApi } from 'services/api/userApi';
import { balanceApi } from 'services/api/balanceApi';

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
