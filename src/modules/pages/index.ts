import { lazy } from 'react';
import { LoginPage } from 'modules/pages/login/Login';

const AnaliticsPage = lazy(() => import('modules/pages/analitics/Analitics'));
const ReportsPage = lazy(() => import('modules/pages/reports/Reports'));
const SettingsPage = lazy(() => import('modules/pages/settings/Settings'));
const PrimeCostPage = lazy(() => import('modules/pages/primeCost/PrimeCost'));
const Signin = lazy(() => import('modules/pages/login/signin/Signin'));
const Registration = lazy(() => import('modules/pages/login/registration/Registration'));
const PasswordRecovery = lazy(
  () => import('modules/pages/login/passwordRecovery/PasswordRecovery')
);
const PasswordReset = lazy(() => import('modules/pages/login/passwordReset/PasswordReset'));
const NotFoundPage = lazy(() => import('modules/pages/notFound/NotFound'));
const BalancePage = lazy(() => import('modules/pages/balance/Balance'));

export {
  AnaliticsPage,
  ReportsPage,
  SettingsPage,
  PrimeCostPage,
  Signin,
  Registration,
  PasswordRecovery,
  PasswordReset,
  NotFoundPage,
  BalancePage,
  LoginPage,
};
