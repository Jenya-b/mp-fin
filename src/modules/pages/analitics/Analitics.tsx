import { NavLink, Outlet } from 'react-router-dom';
import { Main, MainTitle } from 'styles/components';
import { NavWrapper } from './Analitics.styled';
import { routerPath } from 'constants/routerPath';

export const AnaliticsPage = () => {
  const { salesAnalytics, searchQuery } = routerPath;
  return (
    <Main>
      <MainTitle>Аналитика</MainTitle>
      <NavWrapper>
        <NavLink to={salesAnalytics}>Продажи</NavLink>
        <NavLink to={searchQuery}>Запросы</NavLink>
      </NavWrapper>
      <Outlet />
    </Main>
  );
};

export default AnaliticsPage;
