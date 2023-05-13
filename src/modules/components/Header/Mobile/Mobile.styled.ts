import styled from 'styled-components';

interface BurgerProps {
  isActiveBurger: boolean;
}

export const Header = styled.header`
  position: relative;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: ${({ theme }) => theme.order.header};

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  width: 90px;
  height: 100%;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Burger = styled.div<BurgerProps>`
  height: 23px;
  width: 35px;
  display: flex;
  align-items: center;
  position: relative;

  span {
    display: ${({ isActiveBurger }) => (isActiveBurger ? 'none' : 'block')};
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    left: 0;
    transition: all 0.1s;
  }

  &::after {
    transform: rotate(${({ isActiveBurger }) => (isActiveBurger ? 45 : 0)}deg);
    bottom: ${({ isActiveBurger }) => (isActiveBurger ? 10 : 0)}px;
  }

  &::before {
    transform: rotate(${({ isActiveBurger }) => (isActiveBurger ? -45 : 0)}deg);
    top: ${({ isActiveBurger }) => (isActiveBurger ? 10 : 0)}px;
  }
`;
