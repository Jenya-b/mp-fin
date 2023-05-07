import { MouseEvent } from 'react';

import { defaultIconLogo } from 'constants/images';
import {
  StyledHeader,
  BalanceInfo,
  LoginImage,
  LoginInfo,
  LoginName,
  BalanceIcon,
  BalanceSum,
  BalanceButton,
} from './Desktop.styled';
import { IAllUserOptions } from 'services/types';
import { ControlsBlock } from '../ControlsBlock/ControlsBlock';
import { IRouterPath } from 'interfaces/routerPath';

interface HeaderDesktopProps {
  user: IAllUserOptions | null;
  currentBalance: number | null;
  routerPath: IRouterPath;
  openPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onSignoutHandler: () => void;
}

export const HeaderDesktop = ({
  user,
  currentBalance,
  routerPath,
  openPage,
  onSignoutHandler,
}: HeaderDesktopProps) => {
  return (
    <StyledHeader>
      <LoginInfo>
        <LoginImage imagesUrl={user ? user.avatar : defaultIconLogo} />
        <LoginName>{user?.email}</LoginName>
      </LoginInfo>
      <BalanceInfo>
        <BalanceIcon />
        <BalanceSum>
          <span>Баланс:</span> {currentBalance} ₽
        </BalanceSum>
        <BalanceButton name={routerPath.balance} onClick={openPage}>
          Пополнить
        </BalanceButton>
      </BalanceInfo>
      <ControlsBlock
        onSignoutHandler={onSignoutHandler}
        openPage={openPage}
        routerPath={routerPath}
      />
    </StyledHeader>
  );
};
