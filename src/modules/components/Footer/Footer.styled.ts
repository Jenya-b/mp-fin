import styled from 'styled-components';
import { flexCenterAll } from 'styles/fragments';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footerBg};
  border: 1px solid ${({ theme }) => theme.colors.footerBorder};
  ${flexCenterAll}
`;

export const FooterInfo = styled.p``;
