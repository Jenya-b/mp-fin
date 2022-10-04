import styled from 'styled-components';
import { linkStyles } from '../../../../styles/fragments';
import { fontStylesH2, fontStylesSmall } from '../../../../styles/typography';

export const LoginForm = styled.div`
  padding-top: ${({ theme }) => theme.indents.loginForm.paddingTop}px;
  padding-right: ${({ theme }) => theme.indents.loginForm.paddingRight}px;
  padding-bottom: ${({ theme }) => theme.indents.loginForm.paddingBottom}px;
  padding-left: ${({ theme }) => theme.indents.loginForm.paddingLeft}px;
  background: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.borders.loginForm.borderRadius}px;
`;

export const Title = styled.h2`
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

export const ResetPassLink = styled.p`
  margin-top: 13px;
  ${fontStylesSmall}

  ${linkStyles}
`;

export const Controls = styled.div`
  margin-top: 20px;
`;

export const RegistrationLink = styled.p`
  margin-top: 13px;
  ${fontStylesSmall}
  color: ${({ theme }) => theme.colors.formSpan};
  text-align: center;

  ${linkStyles}
`;
