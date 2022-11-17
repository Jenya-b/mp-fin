import { useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { baseTheme } from 'styles/theme';
import { Loader } from 'modules/components/loader/Loader';
import { routerPath } from 'constants/routerPath';
import { useIsInSystemUserQuery } from 'services';
import { useAppDispatch } from 'hooks/redux';
import { RequireAuth } from 'hocs/RequireAuth';
import { LayoutWrapp } from 'modules/components/layout/LayouWrapp';
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
} from './../../pages';

export const App = () => {
  const {
    analitics,
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
        <Routes>
          <Route path={analitics} element={<LayoutWrapp />}>
            <Route
              index
              element={
                <RequireAuth>
                  <AnaliticsPage />
                </RequireAuth>
              }
            />
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
            <Route element={<AdminPage />}>
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
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
};
