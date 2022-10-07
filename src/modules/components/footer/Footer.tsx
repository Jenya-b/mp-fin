import styled from 'styled-components';
import { flexCenterAll } from '../../../styles/fragments';

export const Footer = () => (
  <StyledFooter>
    <FooterInfo>© MpFin, 2022. Все права защищены</FooterInfo>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footerBg};
  border: 1px solid ${({ theme }) => theme.colors.footerBorder};
  ${flexCenterAll}
`;

const FooterInfo = styled.p``;
