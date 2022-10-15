import GlobalStyles from './styles/global';
import { Route, Routes } from 'react-router-dom';
import { BalancePage } from './modules/pages/balance/Balance';
import { AnaliticsPage } from './modules/pages/analitics/Analitics';
import { ReportsPage } from './modules/pages/reports/Reports';
import { SettingsPage } from './modules/pages/settings/Settings';
import { PrimeCostPage } from './modules/pages/primeCost/PrimeCost';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';
import { LoginPage } from './modules/pages/login/Login';
import { Signin } from './modules/pages/login/signin/Signin';
import { Registration } from './modules/pages/login/registration/Registration';
import { ResetPass } from './modules/pages/login/resetPass/ResetPass';
import { routerPath } from './constants/routerPath';
import { NotFoundPage } from './modules/pages/notFound/NotFound';
import { AnaliticCardPage } from './modules/pages/analiticCard/AnaliticCard';
import { useIsInSystemUserQuery } from './utils/api/authApi';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { LayoutWrapp } from './modules/pages/LayouWrapp';
import { setIsActiveUser } from './utils/store/reducers/userSlice';

const App = () => {
  const {
    analitics,
    analiticCard,
    login,
    primeCost,
    registration,
    reports,
    resetPass,
    settings,
    balance,
  } = routerPath;

  const dispatch = useAppDispatch();
  const { data } = useIsInSystemUserQuery(null);

  useEffect(() => {
    if (data) {
      dispatch(setIsActiveUser(data));
    }
  }, [data]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path={analitics} element={<LayoutWrapp />}>
          <Route index element={<AnaliticsPage />} />
          <Route path={analiticCard} element={<AnaliticCardPage />} />
          <Route path={reports} element={<ReportsPage />} />
          <Route path={settings} element={<SettingsPage />} />
          <Route path={primeCost} element={<PrimeCostPage />} />
          <Route path={balance} element={<BalancePage />} />
        </Route>
        <Route path={login} element={<LoginPage />}>
          <Route index element={<Signin />} />
          <Route path={registration} element={<Registration />} />
          <Route path={resetPass} element={<ResetPass />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
