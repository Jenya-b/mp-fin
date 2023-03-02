import { lazy } from 'react';
import { LoginPage } from 'modules/pages/Login/Login';
import { Users } from 'modules/pages/Admin/Users/Users';
import { Weeks } from 'modules/pages/Admin/Weeks/Weeks';
import { SearchTerms } from 'modules/pages/Admin/SearchTerms/SearchTerms';

const AnalyticsPage = lazy(() => import('modules/pages/Analytics/Analytics'));
const ReportsPage = lazy(() => import('modules/pages/Reports/Reports'));
const SettingsPage = lazy(() => import('modules/pages/Settings/Settings'));
const PrimeCostPage = lazy(() => import('modules/pages/PrimeCost/PrimeCost'));
const Signin = lazy(() => import('modules/pages/Login/Signin/Signin'));
const Registration = lazy(() => import('modules/pages/Login/Registration/Registration'));
const PasswordRecovery = lazy(
  () => import('modules/pages/Login/PasswordRecovery/PasswordRecovery')
);
const PasswordReset = lazy(() => import('modules/pages/Login/PasswordReset/PasswordReset'));
const NotFoundPage = lazy(() => import('modules/pages/NotFound/NotFound'));
const BalancePage = lazy(() => import('modules/pages/Balance/Balance'));
const AdminPage = lazy(() => import('modules/pages/Admin/Admin'));
const SearchQuery = lazy(() => import('modules/pages/SearchQuery/SearchQuery'));
const DemandDynamics = lazy(() => import('modules/pages/DemandDynamics/DemandDynamics'));

export {
  AnalyticsPage,
  ReportsPage,
  SettingsPage,
  PrimeCostPage,
  Signin,
  Registration,
  PasswordRecovery,
  PasswordReset,
  NotFoundPage,
  BalancePage,
  AdminPage,
  SearchQuery,
  DemandDynamics,
  LoginPage,
  Users,
  Weeks,
  SearchTerms,
};
