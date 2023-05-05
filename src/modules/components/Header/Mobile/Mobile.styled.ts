import styled from 'styled-components';

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

export const Burger = styled.div`
  height: 23px;
  width: 35px;
  display: flex;
  align-items: center;
  position: relative;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }
`;
