import { createBrowserRouter, Navigate } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
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
} from 'modules/pages';
import { LayoutWrapp } from 'modules/components/Layout/LayouWrapp';
import { RequireAuth } from 'hocs/RequireAuth';
import { RequireAdmin } from 'hocs/RequireAdmin';
import { ErrorBoundary } from 'modules/components/ErrorBoundary/ErrorBoundary';

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

export const router = createBrowserRouter([
  {
    path: home,
    errorElement: <ErrorBoundary />,
    element: <LayoutWrapp />,
    children: [
      {
        index: true,
        element: <Navigate to={analiticsOwn} replace />,
      },
      {
        element: (
          <RequireAuth>
            <AnaliticsPage />
          </RequireAuth>
        ),
        children: [
          {
            path: analiticsOther,
            element: <Navigate to={analiticsOwn} replace />,
          },
          {
            path: analiticsOwn,
            element: <AnaliticsOwn />,
          },
        ],
      },
      {
        path: reports,
        element: (
          <RequireAuth>
            <ReportsPage />
          </RequireAuth>
        ),
      },
      {
        path: settings,
        element: (
          <RequireAuth>
            <SettingsPage />
          </RequireAuth>
        ),
      },
      {
        path: primeCost,
        element: (
          <RequireAuth>
            <PrimeCostPage />
          </RequireAuth>
        ),
      },
      {
        path: balance,
        element: (
          <RequireAuth>
            <BalancePage />
          </RequireAuth>
        ),
      },
      {
        element: (
          <RequireAuth>
            <RequireAdmin>
              <AdminPage />
            </RequireAdmin>
          </RequireAuth>
        ),
        children: [
          {
            path: weeks,
            element: <Weeks />,
          },
          {
            path: users,
            element: <Users />,
          },
        ],
      },
    ],
  },
  {
    path: login,
    errorElement: <ErrorBoundary />,
    element: <LoginPage />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: registration,
        element: <Registration />,
      },
      {
        path: passwordRecovery,
        element: <PasswordRecovery />,
      },
      {
        path: passwordReset,
        element: <PasswordReset />,
      },
    ],
  },
  {
    path: notFound,
    element: <NotFoundPage />,
  },
]);
