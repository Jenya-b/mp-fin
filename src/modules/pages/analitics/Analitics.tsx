import { NavLink, Outlet } from 'react-router-dom';
import { Main, MainTitle } from 'styles/components';
import { NavWrapper } from './Analitics.styled';
import { routerPath } from 'constants/routerPath';

export const AnaliticsPage = () => {
  const { analiticsOwn, analiticsOther } = routerPath;
  return (
    <Main>
      <MainTitle>Аналитика</MainTitle>
      <NavWrapper>
        <NavLink to={analiticsOther}>Smart Data</NavLink>
        <NavLink to={analiticsOwn}>MpFin</NavLink>
      </NavWrapper>
      <Outlet />
    </Main>
  );
};

export default AnaliticsPage;
