import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { mainLogo } from '../../../constants/images';
import { menuList } from '../../../constants/menu';
import { path } from '../../../constants/path';
import { MenuItem } from '../menuItem/MenuItem';
import { Aside, Logo, LogoImg, LogoWrapper, MenuList } from './Sidebar.styled';

export const Sidebar = () => {
  const { analitics } = path;
  const [isActiveSidebar, setInActiveSidebar] = useState<boolean>(false);

  const activeSidebar = () => {
    setInActiveSidebar(true);
  };

  const hideSidebar = () => {
    setInActiveSidebar(false);
  };

  return (
    <Aside isActive={isActiveSidebar} onMouseEnter={activeSidebar} onMouseLeave={hideSidebar}>
      <Link to={analitics}>
        <Logo>
          <LogoWrapper isActive={isActiveSidebar}>
            <LogoImg src={mainLogo} />
          </LogoWrapper>
        </Logo>
      </Link>
      <MenuList>
        {menuList.map((menu) => (
          <MenuItem key={v4()} {...menu} isActive={isActiveSidebar} />
        ))}
      </MenuList>
    </Aside>
  );
};
