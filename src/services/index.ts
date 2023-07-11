import { authApi } from 'services/api/authApi';
import { productApi } from 'services/api/productApi';
import { userApi } from 'services/api/userApi';
import { adminApi } from 'services/api/adminApi';
import { analyticApi } from 'services/api/analyticApi';
import { refreshDataApi } from './api/refreshDataApi';

export const {
  useRegisterUserMutation,
  useSigninUserMutation,
  useIsInSystemUserQuery,
  usePasswordRecoveryMutation,
  usePasswordResetMutation,
} = authApi;

export const {
  useGetReportsQuery,
  useDeleteReportMutation,
  useGetArticlesQuery,
  useChangeArticleMutation,
  useGetWbQueriesQuery,
} = productApi;

export const { useLazyGetUserQuery } = userApi;

export const {
  useGetWeeksQuery,
  useCreateWeekMutation,
  useGetAdminPanelUsersQuery,
  useAppointAdminMutation,
  useRemoveAdminRightsMutation,
} = adminApi;

export const {
  useLazyGetFiltersDataQuery,
  usePostAnalyticsMutation,
  useLazyGetArticleQueriesQuery,
  useAddSavedArticleMutation,
  useGetAllSavedArticleQuery,
  useDeleteSavedArticleMutation,
  useGetWbApiReportsQuery,
  useAddWbTokenMutation,
  useEditWbTokenMutation,
  useIsTokenSavedQuery,
} = analyticApi;

export const { useUpdateDataMutation } = refreshDataApi;
