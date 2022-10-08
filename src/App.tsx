import GlobalStyles from './styles/global';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './modules/pages/Layout';
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
import { path } from './constants/path';
import { NotFoundPage } from './modules/pages/notFound/NotFound';
import { AnaliticCardPage } from './modules/pages/analiticCard/AnaliticCard';

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
  } = path;

  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path={analitics} element={<Layout />}>
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
