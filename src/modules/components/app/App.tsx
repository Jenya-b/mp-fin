import { useEffect, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { baseTheme } from 'styles/theme';
import { Loader } from 'modules/components/loader/Loader';
import { routerPath } from 'constants/routerPath';
import { useIsInSystemUserQuery } from 'services';
import { useAppDispatch } from 'hooks/redux';
import { RequireAuth } from 'hocs/RequireAuth';
import { RequireAdmin } from 'hocs/RequireAdmin';
import { LayoutWrapp } from 'modules/components/layout/LayouWrapp';
import { ErrorFallback } from 'modules/components/ErrorFallback/ErrorFallback';
import { setIsActiveUser } from 'store/reducers/userSlice';
import {
  AnaliticsPage,
  ReportsPage,
  SettingsPage,
  PrimeCostPage,
  Signin,
  Registration,
  PasswordRecovery,
  PasswordReset,
  NotFoundPage,
  LoginPage,
  BalancePage,
  AdminPage,
  Users,
  Weeks,
  AnaliticsOther,
  AnaliticsOwn,
} from './../../pages';

export const App = () => {
  const {
    home,
    analiticsOwn,
    analiticsOther,
    login,
    primeCost,
    registration,
    reports,
    passwordRecovery,
    settings,
    passwordReset,
    balance,
    weeks,
    users,
    notFound,
  } = routerPath;

  const dispatch = useAppDispatch();
  const { isSuccess } = useIsInSystemUserQuery(null);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser(true));
    }
  }, [dispatch, isSuccess]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path={home} element={<LayoutWrapp />}>
              <Route index element={<Navigate to={analiticsOther} replace />} />
              <Route
                element={
                  <RequireAuth>
                    <AnaliticsPage />
                  </RequireAuth>
                }
              >
                <Route path={analiticsOther} element={<AnaliticsOther />} />
                <Route path={analiticsOwn} element={<AnaliticsOwn />} />
              </Route>
              <Route
                path={reports}
                element={
                  <RequireAuth>
                    <ReportsPage />
                  </RequireAuth>
                }
              />
              <Route
                path={settings}
                element={
                  <RequireAuth>
                    <SettingsPage />
                  </RequireAuth>
                }
              />
              <Route
                path={primeCost}
                element={
                  <RequireAuth>
                    <PrimeCostPage />
                  </RequireAuth>
                }
              />
              <Route
                path={balance}
                element={
                  <RequireAuth>
                    <BalancePage />
                  </RequireAuth>
                }
              />
              <Route
                element={
                  <RequireAuth>
                    <RequireAdmin>
                      <AdminPage />
                    </RequireAdmin>
                  </RequireAuth>
                }
              >
                <Route path={weeks} element={<Weeks />} />
                <Route path={users} element={<Users />} />
              </Route>
            </Route>
            <Route path={login} element={<LoginPage />}>
              <Route index element={<Signin />} />
              <Route path={registration} element={<Registration />} />
              <Route path={passwordRecovery} element={<PasswordRecovery />} />
              <Route path={passwordReset} element={<PasswordReset />} />
            </Route>
            <Route path={notFound} element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
};
