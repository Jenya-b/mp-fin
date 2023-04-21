import styled from 'styled-components';
import { PrimaryButton } from 'styles/components';
import { fontStylesCaption, fontStylesRegular } from 'styles/typography';

export const StyledHeader = styled.header`
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 0 60px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }
`;

export const LoginInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const LoginImage = styled.div<{ imagesUrl: string }>`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-image: url(${({ imagesUrl }) => imagesUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (${({ theme }) => theme.media.large}) {
    width: 45px;
    height: 45px;
  }
`;
export const LoginName = styled.div`
  ${fontStylesRegular}
  color: ${({ theme }) => theme.colors.textBase};

  @media (${({ theme }) => theme.media.large}) {
    display: none;
  }
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
  color: ${({ theme }) => theme.colors.textBase};

  @media (${({ theme }) => theme.media.large}) {
    span {
      display: none;
    }
  }
`;

export const BalanceButton = styled(PrimaryButton)`
  margin-left: 35px;
  padding: 7px 38px;
`;

export const Controls = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${({ theme }) => theme.cursor};

  :last-child {
    margin-left: 15px;
  }
`;
export const ButtonSettings = styled(Button)`
  background-image: url('/source/images/iconSettings.png');
  background-position: center center;
  background-repeat: no-repeat;
  cursor: ${({ theme }) => theme.cursor};
`;

export const ButtonLogin = styled(Button)`
  background-image: url('/source/images/iconLogin.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const LoginTitle = styled.div`
  margin-left: 15px;
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textBase};

  @media (${({ theme }) => theme.media.large}) {
    display: none;
  }
`;
