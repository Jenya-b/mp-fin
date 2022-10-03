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

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BalancePage />} />
          <Route path="analitics" element={<AnaliticsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="prime-cost" element={<PrimeCostPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
