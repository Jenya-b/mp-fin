import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainLogo } from 'constants/images';
import { menuSidebar, adminRoute } from 'constants/menu';
import { routerPath } from 'constants/routerPath';
import { MenuItem } from 'modules/components/MenuItem/MenuItem';
import { Aside, Logo, LogoImg, LogoWrapper, MenuList } from './Sidebar.styled';
import { useAppSelector } from 'store/store';
import { userSelector } from 'store/selectors';

export const Sidebar = () => {
  const { home } = routerPath;
  const [menuList, setMenuList] = useState(menuSidebar);
  const { user } = useAppSelector(userSelector);
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
      <Link to={home}>
        <Logo>
          <LogoWrapper isActive={isActiveSidebar}>
            <LogoImg src={mainLogo} />
          </LogoWrapper>
        </Logo>
      </Link>
      <MenuList>
        {menuList.map((menu) => (
          <MenuItem key={menu.title} {...menu} isActive={isActiveSidebar} />
        ))}
      </MenuList>
    </Aside>
  );
};
