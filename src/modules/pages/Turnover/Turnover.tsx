import { NavLink, Outlet } from 'react-router-dom';

import { Main, MainTitle } from 'styles/components';
import { Item, List } from './Turnover.styled';
import { menuTurnoverPanel } from 'constants/menu';

export const Turnover = () => {
  return (
    <Main style={{ overflow: 'hidden' }}>
      <MainTitle>Заказы и продажи</MainTitle>
      <List>
        {menuTurnoverPanel.map(({ title, href }) => (
          <Item key={title}>
            <NavLink to={href}>{title}</NavLink>
          </Item>
        ))}
      </List>
      <Outlet />
    </Main>
  );
};

export default Turnover;
