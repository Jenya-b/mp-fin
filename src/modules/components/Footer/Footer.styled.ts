import styled from 'styled-components';
import { flexCenterAll } from 'styles/fragments';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  color: ${({ theme }) => theme.colors.textBase};
  ${flexCenterAll}
`;

export const FooterInfo = styled.p``;
