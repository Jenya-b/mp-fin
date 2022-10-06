import styled from 'styled-components';
import { Button } from '../../../styles/components';
import { fontStylesCaption, fontStylesRegular } from '../../../styles/typography';

export const StyledHeader = styled.header`
  height: 100%;
  background: ${({ theme }) => theme.colors.header};
  border: 1px solid ${({ theme }) => theme.colors.headerBorder};
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
`;

export const LoginInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const LoginImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.btnCircleHeader};
  background-image: url('/source/images/iconAccount.png');
  background-position: center center;
  background-repeat: no-repeat;
`;
export const LoginName = styled.div`
  ${fontStylesRegular}
  color: ${({ theme }) => theme.colors.textHeaderPrimary};
`;

export const BalanceInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const BalanceIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url('/source/images/iconBalance.png') no-repeat;
`;
export const BalanceSum = styled.div`
  margin-left: 10px;
  ${fontStylesRegular}
  color: ${({ theme }) => theme.colors.textHeaderPrimary};
`;

export const BalanceButton = styled(Button)`
  margin-left: 35px;
  padding: 7px 38px;
`;

export const Controls = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const PrimaryButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.btnCircleHeader};
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  :last-child {
    margin-left: 65px;
  }
`;
export const ButtonSettings = styled(PrimaryButton)`
  background-image: url('/source/images/iconSettings.png');
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ButtonMessage = styled(PrimaryButton)`
  background-image: url('/source/images/iconMessages.png');
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ButtonLogin = styled(PrimaryButton)`
  background-image: url('/source/images/iconLogin.png');
  background-position: center center;
  background-repeat: no-repeat;
`;

export const LoginTitle = styled.div`
  margin-left: 15px;
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textHeaderPrimary};
`;

export const CountMessage = styled.div`
  padding: 0px 8px;
  background: ${({ theme }) => theme.colors.headerMessageCount};
  color: ${({ theme }) => theme.colors.textCountHeader};
  ${fontStylesCaption}
  border-radius: 10px;
  position: absolute;
  top: -9px;
  left: 29px;
`;
