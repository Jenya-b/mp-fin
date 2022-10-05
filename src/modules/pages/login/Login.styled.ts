import styled from 'styled-components';
import { flexCenterAll, linkStyles } from '../../../styles/fragments';
import { fontStylesH2, fontStylesSmall } from '../../../styles/typography';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr ${({ theme }) => theme.sizes.logoForm.width}px;
`;

export const FormWrapper = styled.div`
  ${flexCenterAll}
`;
export const LogoWrapper = styled.div`
  background: url('source/images/background.png') no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Logo = styled.div`
  width: 384px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: url('source/images/logoLogin.png') no-repeat;
  background-position-y: center;
`;

export const LoginForm = styled.div`
  padding-top: ${({ theme }) => theme.indents.loginForm.paddingTop}px;
  padding-right: ${({ theme }) => theme.indents.loginForm.paddingRight}px;
  padding-bottom: ${({ theme }) => theme.indents.loginForm.paddingBottom}px;
  padding-left: ${({ theme }) => theme.indents.loginForm.paddingLeft}px;
  background: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.borders.loginForm.borderRadius}px;
`;

export const TitleForm = styled.h2`
  ${fontStylesH2}
  text-align: center;
  color: ${({ theme }) => theme.colors.titleForm};
`;

export const InputList = styled.div`
  margin-top: ${({ theme }) => theme.indents.inputList.marginTop}px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.inputList.rowGap}px;
`;

export const Label = styled.label`
  width: ${({ theme }) => theme.sizes.loginForm.width}px;
`;

export const Controls = styled.div`
  margin-top: 20px;
`;

export const LinkWrapper = styled.p`
  margin-top: 13px;
  color: ${({ theme }) => theme.colors.formSpan};
  ${fontStylesSmall}
  ${linkStyles}
`;

export const LinkWrapperCenter = styled(LinkWrapper)`
  text-align: center;
`;
