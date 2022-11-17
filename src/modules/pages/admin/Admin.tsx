import { menuAdmin } from 'constants/menu';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Menu, Content, List, Item } from './Admin.styled';

export const AdminPage = () => {
  return (
    <Wrapper>
      <Menu>
        <List>
          {menuAdmin.map(({ title, href }) => (
            <Item key={title}>
              <NavLink to={href}>{title}</NavLink>
            </Item>
          ))}
        </List>
      </Menu>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default AdminPage;
