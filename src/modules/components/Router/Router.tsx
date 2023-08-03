import { createBrowserRouter } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import {
  AnalyticsPage,
  ReportsPage,
  SettingsPage,
  PrimeCostPage,
  Signin,
  Registration,
  NotFoundPage,
  LoginPage,
  BalancePage,
  AdminPage,
  SearchTerms,
  SearchQuery,
  DemandDynamics,
  OrdersPage,
  TurnoverPage,
  SalesPage,
  ComparisonPage,
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
  settings,
  balance,
  searchTerms,
  searchQuery,
  dynamics,
  sales,
  orders,
  notFound,
  comparison,
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
            <AnalyticsPage />
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
        path: dynamics,
        element: (
          <RequireAuth>
            <DemandDynamics />
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
            <TurnoverPage />
          </RequireAuth>
        ),
        children: [
          {
            path: orders,
            element: <OrdersPage />,
          },
          {
            path: sales,
            element: <SalesPage />,
          },
          {
            path: comparison,
            element: <ComparisonPage />,
          },
        ],
      },
      {
        element: (
          <RequireAuth>
            {/* <RequireAdmin> */}
            <AdminPage />
            {/* </RequireAdmin> */}
          </RequireAuth>
        ),
        children: [
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
    ],
  },
  {
    path: notFound,
    element: <NotFoundPage />,
  },
]);
