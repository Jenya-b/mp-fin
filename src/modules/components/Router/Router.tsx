import { createBrowserRouter } from 'react-router-dom';
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
  SearchTerms,
  SearchQuery,
} from 'modules/pages';
import { LayoutWrapp } from 'modules/components/Layout/LayouWrapp';
import { RequireAuth } from 'hocs/RequireAuth';
import { RequireAdmin } from 'hocs/RequireAdmin';
import { ErrorBoundary } from 'modules/components/ErrorBoundary/ErrorBoundary';

const {
  home,
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
  searchTerms,
  searchQuery,
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
        element: (
          <RequireAuth>
            <AnaliticsPage />
          </RequireAuth>
        ),
      },
      {
        path: searchQuery,
        element: (
          <RequireAuth>
            <SearchQuery />
          </RequireAuth>
        ),
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
          {
            path: searchTerms,
            element: <SearchTerms />,
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
