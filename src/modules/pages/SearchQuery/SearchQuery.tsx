import { NavLink, Outlet } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { Main, MainTitle } from 'styles/components';
import { NavWrapper } from './SearchQuery.styled';

export const SearchQuery = () => {
  const { searchByName, searchByArticle } = routerPath;

  return (
    <Main style={{ overflow: 'hidden' }}>
      <MainTitle>Поисковые запросы</MainTitle>
      <NavWrapper>
        <NavLink to={searchByArticle}>По артикулам</NavLink>
        <NavLink to={searchByName}>По наименованию</NavLink>
      </NavWrapper>
      <Outlet />
    </Main>
  );
};

export default SearchQuery;
