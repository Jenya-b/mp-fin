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

const App = () => {
  const { analitics, login, primeCost, registration, reports, resetPass, settings } = path;

  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BalancePage />} />
          <Route path={analitics} element={<AnaliticsPage />} />
          <Route path={reports} element={<ReportsPage />} />
          <Route path={settings} element={<SettingsPage />} />
          <Route path={primeCost} element={<PrimeCostPage />} />
        </Route>
        <Route path={login} element={<LoginPage />}>
          <Route index element={<Signin />} />
          <Route path={registration} element={<Registration />} />
          <Route path={resetPass} element={<ResetPass />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
