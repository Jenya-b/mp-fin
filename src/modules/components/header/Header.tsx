import { useNavigate } from 'react-router-dom';
import { StyledHeader, BalanceInfo, Controls, LoginImage } from './Header.styled';
import { LoginInfo, LoginName, ButtonWrapper, ButtonSettings } from './Header.styled';
import { ButtonMessage, ButtonLogin, LoginTitle, CountMessage } from './Header.styled';
import { BalanceIcon, BalanceSum, BalanceButton } from './Header.styled';
import { routerPath } from '../../../constants/routerPath';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useSignoutMutation } from '../../../services';
import { useEffect } from 'react';
import { setIsActiveUser, setUser } from '../../../store/reducers/userSlice';
import { defaultIconLogo } from '../../../constants/images';

export const Header = () => {
  const { balance, settings, login } = routerPath;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isActiveUser } = useAppSelector((state) => state.persistedUserReducer);

  const [signoutUser, { isSuccess }] = useSignoutMutation();

  const openPage = (href: string) => {
    navigate(href);
  };

  const onSignoutHandler = async () => {
    signoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser(false));
      dispatch(setUser(null));
    }
  }, [isSuccess]);

  return (
    <StyledHeader>
      <LoginInfo>
        <LoginImage imagesUrl={user?.avatar || defaultIconLogo}></LoginImage>
        {isActiveUser && <LoginName>{user?.email}</LoginName>}
      </LoginInfo>
      {/* {isActiveUser && ( //! страница в разработке
        <BalanceInfo>
          <BalanceIcon></BalanceIcon>
          <BalanceSum>Баланс: 1800 ₽</BalanceSum>
          <BalanceButton onClick={() => openPage(balance)}>Пополнить</BalanceButton>
        </BalanceInfo>
      )} */}
      <Controls>
        {isActiveUser && (
          <>
            <ButtonWrapper>
              <ButtonSettings onClick={() => openPage(settings)}></ButtonSettings>
            </ButtonWrapper>
            {/* <ButtonWrapper> //! страница в разработке
              <ButtonMessage></ButtonMessage>
              <CountMessage>89</CountMessage>
            </ButtonWrapper> */}
          </>
        )}
        <ButtonWrapper>
          <ButtonLogin></ButtonLogin>
          {!isActiveUser && <LoginTitle onClick={() => openPage(login)}>Войти</LoginTitle>}
          {isActiveUser && <LoginTitle onClick={onSignoutHandler}>Выйти</LoginTitle>}
        </ButtonWrapper>
      </Controls>
    </StyledHeader>
  );
};
