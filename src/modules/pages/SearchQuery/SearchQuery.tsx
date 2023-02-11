import { NavLink, Outlet } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { Main, MainTitle } from 'styles/components';
import { NavWrapper } from './SearchQuery.styled';

export const SearchQuery = () => {
  const { searchByName, searchByArticle } = routerPath;

  return (
    <Main>
      <MainTitle>Поисковые запросы</MainTitle>
      <NavWrapper>
        <NavLink to={searchByName}>По наименованию</NavLink>
        <NavLink to={searchByArticle}>По артикулам</NavLink>
      </NavWrapper>
      <Outlet />
    </Main>
  );
};

export default SearchQuery;
