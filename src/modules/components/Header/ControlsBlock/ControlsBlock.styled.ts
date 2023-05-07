import styled from 'styled-components';
import { fontStylesCaption } from 'styles/typography';

export const Controls = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 15px;

  @media (${({ theme }) => theme.media.medium}) {
    position: absolute;
    bottom: 0px;
    right: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: flex-end;
    column-gap: 0px;
    row-gap: 20px;
  }
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (${({ theme }) => theme.media.medium}) {
    width: 30px;
    height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${({ theme }) => theme.cursor};

  :last-child {
    margin-left: 15px;

    @media (${({ theme }) => theme.media.medium}) {
      margin-left: 0px;
    }
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

export const ButtonBalance = styled(Button)`
  display: none;
  background-image: url('/source/images/iconBalanceBtn.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (${({ theme }) => theme.media.medium}) {
    display: block;
  }
`;

export const LoginTitle = styled.div`
  margin-left: 15px;
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textBase};

  @media (${({ theme }) => theme.media.large}) {
    display: none;
  }
`;
