import { MouseEvent } from 'react';
import {
  Controls,
  ButtonLogin,
  ButtonSettings,
  ButtonWrapper,
  LoginTitle,
  ButtonBalance,
} from './ControlsBlock.styled';
import { IRouterPath } from 'interfaces/routerPath';

interface ControlsBlockProps {
  openPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onSignoutHandler: () => void;
  routerPath: IRouterPath;
}

export const ControlsBlock = ({ onSignoutHandler, openPage, routerPath }: ControlsBlockProps) => (
  <Controls>
    <ButtonWrapper>
      <ButtonBalance name={routerPath.balance} onClick={openPage} />
    </ButtonWrapper>
    <ButtonWrapper>
      <ButtonSettings name={routerPath.settings} onClick={openPage} />
    </ButtonWrapper>
    <ButtonWrapper onClick={onSignoutHandler}>
      <ButtonLogin />
      <LoginTitle>Выйти</LoginTitle>
    </ButtonWrapper>
  </Controls>
);
