import { useNavigate } from 'react-router-dom';
import { StyledHeader, BalanceInfo, Controls, LoginImage } from './Header.styled';
import { LoginInfo, LoginName, ButtonWrapper, ButtonSettings } from './Header.styled';
import { ButtonMessage, ButtonLogin, LoginTitle, CountMessage } from './Header.styled';
import { BalanceIcon, BalanceSum, BalanceButton } from './Header.styled';
import { routerPath } from '../../../constants/routerPath';

export const Header = () => {
  const { balance, settings } = routerPath;
  const navigate = useNavigate();

  const openPage = (href: string) => {
    navigate(href);
  };

  return (
    <StyledHeader>
      <LoginInfo>
        <LoginImage></LoginImage>
        <LoginName>Ivan@gmail.com</LoginName>
      </LoginInfo>
      <BalanceInfo>
        <BalanceIcon></BalanceIcon>
        <BalanceSum>Баланс: 1800 ₽</BalanceSum>
        <BalanceButton onClick={() => openPage(balance)}>Пополнить</BalanceButton>
      </BalanceInfo>
      <Controls>
        <ButtonWrapper>
          <ButtonSettings onClick={() => openPage(settings)}></ButtonSettings>
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
};
