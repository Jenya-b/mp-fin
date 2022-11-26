import { authApi } from 'services/api/authApi';
import { productApi } from 'services/api/productApi';
import { userApi } from 'services/api/userApi';
import { balanceApi } from 'services/api/balanceApi';
import { adminApi } from 'services/api/adminApi';
import { analiticApi } from 'services/api/analiticApi';

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

export const { useLazyGetUserQuery, useChangePersonalDataMutation, useChangeReportIdMutation } =
  userApi;

export const { useLazyGetBalanceQuery } = balanceApi;

export const {
  useGetWeeksQuery,
  useCreateWeekMutation,
  useGetAdminPanelUsersQuery,
  useAppointAdminMutation,
  useRemoveAdminRightsMutation,
} = adminApi;

export const { useLazyGetSmartDataSSOQuery, useAddReportSmartDataMutation } = analiticApi;
