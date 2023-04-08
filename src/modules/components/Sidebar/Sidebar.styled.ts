import styled from 'styled-components';

interface AsideProps {
  isActive: boolean;
}

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isActive }) =>
    isActive
      ? ({ theme }) => theme.sizes.sidebar.widthActive
      : ({ theme }) => theme.sizes.sidebar.widthHidden}px;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.sidebar.logo.height}px 1fr / 1fr;
  transition: all 0.1s;
  z-index: ${({ theme }) => theme.order.sidebar};
`;

export const Logo = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div<AsideProps>`
  padding: ${({ isActive }) => (isActive ? '0 0 0 27px' : '0 12px 0 12px')};
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
