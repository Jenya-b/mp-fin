import GlobalStyles from '../../../styles/global';
import { Route, Routes } from 'react-router-dom';
import { BalancePage } from '../../pages/balance/Balance';
import { AnaliticsPage } from '../../pages/analitics/Analitics';
import { ReportsPage } from '../../pages/reports/Reports';
import { SettingsPage } from '../../pages/settings/Settings';
import { PrimeCostPage } from '../../pages/primeCost/PrimeCost';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../../styles/theme';
import { LoginPage } from '../../pages/login/Login';
import { Signin } from '../../pages/login/signin/Signin';
import { Registration } from '../../pages/login/registration/Registration';
import { PasswordRecovery } from '../../pages/login/passwordRecovery/PasswordRecovery';
import { routerPath } from '../../../constants/routerPath';
import { NotFoundPage } from '../../pages/notFound/NotFound';
import { AnaliticCardPage } from '../../pages/analiticCard/AnaliticCard';
import { useIsInSystemUserQuery } from '../../../services';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { LayoutWrapp } from '../../pages/LayouWrapp';
import { setIsActiveUser } from '../../../store/reducers/userSlice';
import { PasswordReset } from '../../pages/login/passwordReset/PasswordReset';

export const App = () => {
  const {
    analitics,
    analiticCard,
    login,
    primeCost,
    registration,
    reports,
    passwordRecovery,
    settings,
    balance,
    passwordReset,
  } = routerPath;

  const dispatch = useAppDispatch();
  const { isSuccess } = useIsInSystemUserQuery(null);

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(setIsActiveUser(true));
  }, [isSuccess]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path={analitics} element={<LayoutWrapp />}>
          <Route index element={<AnaliticsPage />} />
          <Route path={analiticCard} element={<AnaliticCardPage />} />
          <Route path={reports} element={<ReportsPage />} />
          <Route path={settings} element={<SettingsPage />} />
          <Route path={primeCost} element={<PrimeCostPage />} />
          {/* <Route path={balance} element={<BalancePage />} /> //! страница в разработке */}
        </Route>
        <Route path={login} element={<LoginPage />}>
          <Route index element={<Signin />} />
          <Route path={registration} element={<Registration />} />
          <Route path={passwordRecovery} element={<PasswordRecovery />} />
          <Route path={passwordReset} element={<PasswordReset />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
};
