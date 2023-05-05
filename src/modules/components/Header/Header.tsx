import { useEffect, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'modules/components/Loader/Loader';
import { routerPath } from 'constants/routerPath';
import { useSignoutMutation } from 'services';
import { resetUser } from 'store/reducers/userSlice';
import { balanceSelector, userSelector } from 'store/selectors';
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
  const currentBalance = useAppSelector(balanceSelector);

  const [signoutUser, { isSuccess, isLoading }] = useSignoutMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetUser());
    }
  }, [dispatch, isSuccess]);

  const openPage = (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch (name) {
      case balance:
        navigate(balance);
        break;
      case settings:
        navigate(settings);
        break;
      default:
        break;
    }
  };

  const onSignoutHandler = () => {
    signoutUser();
  };

  return (
    <>
      {isLoading && <Loader />}
      <HeaderDesktop
        user={user}
        balance={balance}
        settings={settings}
        currentBalance={currentBalance}
        openPage={openPage}
        onSignoutHandler={onSignoutHandler}
      />
      <HeaderMobile setActiveMenu={setActiveMenu} />
      <PullDownMenu
        dataMenu={menuSidebar}
        extraMenu={adminRoute}
        isActiveMenu={isActiveMenu}
        isAdmin={user?.isAdmin}
      />
    </>
  );
};
