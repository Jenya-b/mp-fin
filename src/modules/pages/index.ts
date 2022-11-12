import { lazy } from 'react';
import { LoginPage } from './../pages/login/Login';

const AnaliticsPage = lazy(() => import('./../pages/analitics/Analitics'));
const ReportsPage = lazy(() => import('./../pages/reports/Reports'));
const SettingsPage = lazy(() => import('./../pages/settings/Settings'));
const PrimeCostPage = lazy(() => import('./../pages/primeCost/PrimeCost'));
const Signin = lazy(() => import('./../pages/login/signin/Signin'));
const Registration = lazy(() => import('./../pages/login/registration/Registration'));
const PasswordRecovery = lazy(() => import('./../pages/login/passwordRecovery/PasswordRecovery'));
const PasswordReset = lazy(() => import('./../pages/login/passwordReset/PasswordReset'));
const NotFoundPage = lazy(() => import('./../pages/notFound/NotFound'));
const BalancePage = lazy(() => import('./../pages/balance/Balance'));

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
