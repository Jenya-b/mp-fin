import { useEffect, MouseEvent } from 'react';
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
import { useSignoutMutation } from 'services';
import { resetUser } from 'store/reducers/userSlice';
import { defaultIconLogo } from 'constants/images';
import { balanceSelector, userSelector } from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store/store';

export const Header = () => {
  const { balance, settings } = routerPath;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isActiveUser } = useAppSelector(userSelector);
  const currentBalance = useAppSelector(balanceSelector);

  const [signoutUser, { isSuccess, isLoading }] = useSignoutMutation();

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
            <BalanceButton name={balance} onClick={openPage}>
              Пополнить
            </BalanceButton>
          </BalanceInfo>
        )}
        <Controls>
          {isActiveUser && (
            <>
              <ButtonWrapper>
                <ButtonSettings name={settings} onClick={openPage}></ButtonSettings>
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
