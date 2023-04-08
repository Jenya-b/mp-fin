import styled from 'styled-components';
import { ButtonMailStyles, flexCenterAll } from 'styles/fragments';
import { fontStylesRegularBold, fontStylesCaptionBig } from 'styles/typography';

export const InfoText = styled.div`
  margin-top: 20px;
  ${fontStylesCaptionBig}
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  ${ButtonMailStyles}
  ${fontStylesRegularBold}
  ${flexCenterAll}
	
  width: 250px;
  height: ${({ theme }) => theme.sizes.primaryBtn.height}px;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
