import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fontStylesCaption } from 'styles/typography';

interface MenuProps {
  isActiveMenu: boolean;
}

export const Menu = styled.nav<MenuProps>`
  display: none;
  position: absolute;
  top: ${({ isActiveMenu }) => (isActiveMenu ? '0vh' : '-100vh')};
  width: 100%;
  padding: 80px 20px 20px 20px;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  z-index: ${({ theme }) => theme.order.sidebar};
  transition: all 0.3s;

  @media (${({ theme }) => theme.media.medium}) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textSecondary};
  ${fontStylesCaption}
  font-size: 16px;
`;
