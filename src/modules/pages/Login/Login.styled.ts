import styled from 'styled-components';
import { SecondaryButton } from 'styles/components';
import { flexCenterAll, linkStyles } from '../../../styles/fragments';
import { fontStylesH2, fontStylesSmall } from '../../../styles/typography';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundBase};
  display: grid;
  grid-template-columns: 1fr ${({ theme }) => theme.sizes.logoForm.width}px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const FormWrapper = styled.div`
  ${flexCenterAll}

  @media (max-width: 560px) {
    display: block;
  }
`;
export const LogoWrapper = styled.div`
  background: url('/source/images/background.png') no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 384px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: url('/source/images/logoLogin.png') no-repeat;
  background-position-y: center;
`;

export const LoginForm = styled.form`
  padding-top: ${({ theme }) => theme.indents.loginForm.paddingTop}px;
  padding-right: ${({ theme }) => theme.indents.loginForm.paddingRight}px;
  padding-bottom: ${({ theme }) => theme.indents.loginForm.paddingBottom}px;
  padding-left: ${({ theme }) => theme.indents.loginForm.paddingLeft}px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: ${({ theme }) => theme.borders.loginForm.borderRadius}px;

  @media (max-width: 560px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const TitleForm = styled.h2`
  ${fontStylesH2}
  text-align: center;
  color: ${({ theme }) => theme.colors.textBase};
`;

export const InputList = styled.div`
  margin-top: ${({ theme }) => theme.indents.inputList.marginTop}px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.inputList.rowGap}px;
`;

export const Label = styled.label`
  width: ${({ theme }) => theme.sizes.loginForm.width}px;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Controls = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const LinkWrapper = styled.p`
  margin-top: 13px;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStylesSmall}
  ${linkStyles}
`;

export const LinkWrapperCenter = styled(LinkWrapper)`
  text-align: center;
`;

export const MessageError = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.textAttentionSecondary};
`;

export const TelegramButton = styled(SecondaryButton)`
  background: ${({ theme }) => theme.colors.backgroundTelegramPrimary};

  :hover,
  :active {
    background: ${({ theme }) => theme.colors.backgroundTelegramSecondary};
  }
`;

export const TelegramImg = styled.img`
  width: ${({ theme }) => theme.sizes.telegramIcon.width}px;
  height: ${({ theme }) => theme.sizes.telegramIcon.height}px;
`;
