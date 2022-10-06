import { StyledHeader, BalanceInfo, Controls, LoginImage } from './Header.styled';
import { LoginInfo, LoginName, ButtonWrapper, ButtonSettings } from './Header.styled';
import { ButtonMessage, ButtonLogin, LoginTitle, CountMessage } from './Header.styled';
import { BalanceIcon, BalanceSum, BalanceButton } from './Header.styled';

export const Header = () => (
  <StyledHeader>
    <LoginInfo>
      <LoginImage></LoginImage>
      <LoginName>Ivan@gmail.com</LoginName>
    </LoginInfo>
    <BalanceInfo>
      <BalanceIcon></BalanceIcon>
      <BalanceSum>Баланс: 1800 ₽</BalanceSum>
      <BalanceButton>Пополнить</BalanceButton>
    </BalanceInfo>
    <Controls>
      <ButtonWrapper>
        <ButtonSettings></ButtonSettings>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonMessage></ButtonMessage>
        <CountMessage>89</CountMessage>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonLogin></ButtonLogin>
        <LoginTitle>Выйти</LoginTitle>
      </ButtonWrapper>
    </Controls>
  </StyledHeader>
);
