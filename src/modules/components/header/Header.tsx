import { useNavigate } from 'react-router-dom';
import { StyledHeader, BalanceInfo, Controls, LoginImage } from './Header.styled';
import { LoginInfo, LoginName, ButtonWrapper, ButtonSettings } from './Header.styled';
import { ButtonMessage, ButtonLogin, LoginTitle, CountMessage } from './Header.styled';
import { BalanceIcon, BalanceSum, BalanceButton } from './Header.styled';
import { routerPath } from '../../../constants/routerPath';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useSignoutMutation } from '../../../utils/api/authApi';
import { setUser } from '../../../utils/store/reducers/userSlice';
import { useEffect } from 'react';

export const Header = () => {
  const { balance, settings, login } = routerPath;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);

  const [signoutUser, { isLoading, isSuccess, error, isError }] = useSignoutMutation();

  const openPage = (href: string) => {
    navigate(href);
  };

  const onSignoutHandler = async () => {
    signoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(null));
    }
  }, [isSuccess]);

  return (
    <StyledHeader>
      <LoginInfo>
        <LoginImage></LoginImage>
        {user && <LoginName>{user.email}</LoginName>}
      </LoginInfo>
      {user && (
        <BalanceInfo>
          <BalanceIcon></BalanceIcon>
          <BalanceSum>Баланс: 1800 ₽</BalanceSum>
          <BalanceButton onClick={() => openPage(balance)}>Пополнить</BalanceButton>
        </BalanceInfo>
      )}
      <Controls>
        {user && (
          <>
            <ButtonWrapper>
              <ButtonSettings onClick={() => openPage(settings)}></ButtonSettings>
            </ButtonWrapper>
            <ButtonWrapper>
              <ButtonMessage></ButtonMessage>
              <CountMessage>89</CountMessage>
            </ButtonWrapper>
          </>
        )}
        <ButtonWrapper>
          <ButtonLogin></ButtonLogin>
          {!user && <LoginTitle onClick={() => openPage(login)}>Войти</LoginTitle>}
          {user && <LoginTitle onClick={onSignoutHandler}>Выйти</LoginTitle>}
        </ButtonWrapper>
      </Controls>
    </StyledHeader>
  );
};
