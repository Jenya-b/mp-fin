import { Dispatch, SetStateAction } from 'react';

import { mainLogo } from 'constants/images';
import { Header, LogoImg, LogoWrapper, Burger } from './Mobile.styled';

interface HeaderMobileProps {
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  isActiveMenu: boolean;
}

export const HeaderMobile = ({ setActiveMenu, isActiveMenu }: HeaderMobileProps) => {
  const updateDisplayMenu = () => {
    setActiveMenu((state) => !state);
  };

  return (
    <Header>
      <LogoWrapper>
        <LogoImg src={mainLogo} alt="logo" />
      </LogoWrapper>
      <Burger onClick={updateDisplayMenu} isActiveBurger={isActiveMenu}>
        <span></span>
      </Burger>
    </Header>
  );
};
