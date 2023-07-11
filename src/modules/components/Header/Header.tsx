import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'modules/components/Loader/Loader';
import { routerPath } from 'constants/routerPath';
import { resetUser } from 'store/reducers/userSlice';
import { userSelector } from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store/store';
import { HeaderDesktop } from './Desktop/Desktop';
import { HeaderMobile } from './Mobile/Mobile';
import { PullDownMenu } from '../PullDownMenu/PullDownMenu';
import { adminRoute, menuSidebar } from 'constants/menu';

export const Header = () => {
  const { balance, settings } = routerPath;
  const [isActiveMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);

  const openPage = (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch (name) {
      case balance:
        navigate(balance);
        setActiveMenu(false);
        break;
      case settings:
        navigate(settings);
        setActiveMenu(false);
        break;
    }
  };

  const onSignoutHandler = () => {
    dispatch(resetUser());
  };

  return (
    <>
      <HeaderDesktop
        user={user}
        routerPath={routerPath}
        currentBalance={0}
        openPage={openPage}
        onSignoutHandler={onSignoutHandler}
      />
      <HeaderMobile setActiveMenu={setActiveMenu} isActiveMenu={isActiveMenu} />
      <PullDownMenu
        routerPath={routerPath}
        dataMenu={menuSidebar}
        extraMenu={adminRoute}
        isActiveMenu={isActiveMenu}
        setActiveMenu={setActiveMenu}
        isAdmin={user?.isAdmin}
        settings={settings}
        openPage={openPage}
        onSignoutHandler={onSignoutHandler}
      />
    </>
  );
};
