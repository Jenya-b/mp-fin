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

  @media (${({ theme }) => theme.media.extraLarge}) {
    padding: 0 30px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    display: none;
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
