import { menuAdminPanel } from 'constants/menu';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Menu, List, Item } from './Admin.styled';

export const AdminPage = () => {
  return (
    <Wrapper>
      <Menu>
        <List>
          {menuAdminPanel.map(({ title, href }) => (
            <Item key={title}>
              <NavLink to={href}>{title}</NavLink>
            </Item>
          ))}
        </List>
      </Menu>
      <Outlet />
    </Wrapper>
  );
};

export default AdminPage;
