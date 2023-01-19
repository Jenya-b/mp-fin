import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainLogo } from 'constants/images';
import { menuSidebar, adminRoute } from 'constants/menu';
import { routerPath } from 'constants/routerPath';
import { Menu } from 'modules/components/Sidebar/Menu';
import { Aside, Logo, LogoImg, LogoWrapper } from './Sidebar.styled';
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

  useEffect(() => {
    console.log(isActiveSidebar);
  }, [isActiveSidebar]);

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
      <Menu list={menuList} isActive={isActiveSidebar} />
    </Aside>
  );
};
