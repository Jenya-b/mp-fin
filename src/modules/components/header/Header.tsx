import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledHeader,
  BalanceInfo,
  Controls,
  LoginImage,
} from 'modules/components/Header/Header.styled';
import {
  LoginInfo,
  LoginName,
  ButtonWrapper,
  ButtonSettings,
  ButtonLogin,
  LoginTitle,
  BalanceIcon,
  BalanceSum,
  BalanceButton,
} from 'modules/components/Header/Header.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { routerPath } from 'constants/routerPath';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useSignoutMutation } from 'services';
import { resetUser } from 'store/reducers/userSlice';
import { defaultIconLogo } from 'constants/images';
import { balanceSelector, userSelector } from 'store/selectors';

export const Header = () => {
  const { balance, settings } = routerPath;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isActiveUser } = useAppSelector(userSelector);
  const currentBalance = useAppSelector(balanceSelector);

  const [signoutUser, { isSuccess, isLoading }] = useSignoutMutation();

  const openPage = (href: string) => {
    navigate(href);
  };

  const onSignoutHandler = async () => {
    signoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetUser());
    }
  }, [dispatch, isSuccess]);

  return (
    <>
      {isLoading && <Loader />}
      <StyledHeader>
        <LoginInfo>
          <LoginImage imagesUrl={user?.avatar || defaultIconLogo}></LoginImage>
          {isActiveUser && <LoginName>{user?.email}</LoginName>}
        </LoginInfo>
        {isActiveUser && (
          <BalanceInfo>
            <BalanceIcon></BalanceIcon>
            <BalanceSum>Баланс: {currentBalance} ₽</BalanceSum>
            <BalanceButton onClick={() => openPage(balance)}>Пополнить</BalanceButton>
          </BalanceInfo>
        )}
        <Controls>
          {isActiveUser && (
            <>
              <ButtonWrapper>
                <ButtonSettings onClick={() => openPage(settings)}></ButtonSettings>
              </ButtonWrapper>
            </>
          )}
          <ButtonWrapper onClick={onSignoutHandler}>
            <ButtonLogin></ButtonLogin>
            <LoginTitle>Выйти</LoginTitle>
          </ButtonWrapper>
        </Controls>
      </StyledHeader>
    </>
  );
};
