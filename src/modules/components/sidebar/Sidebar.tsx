import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { mainLogo } from 'constants/images';
import { menuSidebar, adminRoute } from 'constants/menu';
import { routerPath } from 'constants/routerPath';
import { MenuItem } from 'modules/components/menuItem/MenuItem';
import { Aside, Logo, LogoImg, LogoWrapper, MenuList } from './Sidebar.styled';
import { useAppSelector } from 'hooks/redux';

export const Sidebar = () => {
  const { analitics } = routerPath;
  const [menuList, setMenuList] = useState(menuSidebar);
  const { user } = useAppSelector((state) => state.persistedUserReducer);
  const [isActiveSidebar, setInActiveSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.isAdmin) {
      setMenuList([...menuSidebar, adminRoute]);
    }
  }, [user]);

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
