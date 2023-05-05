import { MouseEvent } from 'react';

import { defaultIconLogo } from 'constants/images';
import {
  StyledHeader,
  BalanceInfo,
  Controls,
  LoginImage,
  LoginInfo,
  LoginName,
  ButtonWrapper,
  ButtonSettings,
  ButtonLogin,
  LoginTitle,
  BalanceIcon,
  BalanceSum,
  BalanceButton,
} from './Desktop.styled';
import { IAllUserOptions } from 'services/types';

interface HeaderDesktopProps {
  user: IAllUserOptions | null;
  currentBalance: number | null;
  balance: string;
  settings: string;
  openPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onSignoutHandler: () => void;
}

export const HeaderDesktop = ({
  user,
  currentBalance,
  balance,
  settings,
  openPage,
  onSignoutHandler,
}: HeaderDesktopProps) => {
  return (
    <StyledHeader>
      <LoginInfo>
        <LoginImage imagesUrl={user ? user.avatar : defaultIconLogo}></LoginImage>
        <LoginName>{user?.email}</LoginName>
      </LoginInfo>
      <BalanceInfo>
        <BalanceIcon></BalanceIcon>
        <BalanceSum>
          <span>Баланс:</span> {currentBalance} ₽
        </BalanceSum>
        <BalanceButton name={balance} onClick={openPage}>
          Пополнить
        </BalanceButton>
      </BalanceInfo>
      <Controls>
        <ButtonWrapper>
          <ButtonSettings name={settings} onClick={openPage}></ButtonSettings>
        </ButtonWrapper>
        <ButtonWrapper onClick={onSignoutHandler}>
          <ButtonLogin></ButtonLogin>
          <LoginTitle>Выйти</LoginTitle>
        </ButtonWrapper>
      </Controls>
    </StyledHeader>
  );
};
