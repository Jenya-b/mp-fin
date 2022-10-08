import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { mainLogo } from '../../../constants/images';
import { menuList } from '../../../constants/menu';
import { path } from '../../../constants/path';
import { MenuItem } from '../menuItem/MenuItem';

export const Sidebar = () => {
  const { analitics } = path;

  return (
    <Aside>
      <Link to={analitics}>
        <Logo>
          <LogoWrapper>
            <LogoImg src={mainLogo} />
          </LogoWrapper>
        </Logo>
      </Link>
      <MenuList>
        {menuList.map((menu) => (
          <MenuItem key={v4()} {...menu} />
        ))}
      </MenuList>
    </Aside>
  );
};

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.sizes.sidebar.widthActive}px;
  height: 100%;
  background: ${({ theme }) => theme.colors.sidebar};
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.sidebar.logo.height}px 1fr / 1fr;
`;

const Logo = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.sidebarLogo};
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  padding-left: 27px;
`;

const LogoImg = styled.img``;

const MenuList = styled.ul`
  padding-top: 40px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
