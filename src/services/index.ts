import { authApi } from 'services/api/authApi';
import { productApi } from 'services/api/productApi';
import { userApi } from 'services/api/userApi';
import { analyticApi } from 'services/api/analyticApi';
import { refreshDataApi } from './api/refreshDataApi';

export const { useRegisterUserMutation, useSigninUserMutation, useIsInSystemUserQuery } = authApi;

export const {
  useGetReportsQuery,
  useDeleteReportMutation,
  useGetArticlesQuery,
  useChangeArticleMutation,
  useGetWbQueriesQuery,
} = productApi;

export const { useLazyGetUserQuery, useEditUserInfoMutation } = userApi;

export const {
  useLazyGetFiltersDataQuery,
  usePostAnalyticsMutation,
  useLazyGetArticleQueriesQuery,
  useAddSavedArticleMutation,
  useGetAllSavedArticleQuery,
  useDeleteSavedArticleMutation,
  useGetWbApiOrdersReportsQuery,
  useGetWbApiSalesReportsQuery,
  useAddWbTokenMutation,
  useEditWbTokenMutation,
  useIsTokenSavedQuery,
} = analyticApi;

export const { useUpdateDataMutation } = refreshDataApi;
