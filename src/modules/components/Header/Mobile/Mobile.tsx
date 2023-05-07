import { Dispatch, SetStateAction } from 'react';

import { mainLogo } from 'constants/images';
import { Header, LogoImg, LogoWrapper, Burger } from './Mobile.styled';

interface HeaderMobileProps {
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobile = ({ setActiveMenu }: HeaderMobileProps) => {
  const updateDisplayMenu = () => {
    setActiveMenu((state) => !state);
  };

  return (
    <Header>
      <LogoWrapper>
        <LogoImg src={mainLogo} alt="logo" />
      </LogoWrapper>
      <Burger onClick={updateDisplayMenu}>
        <span></span>
      </Burger>
    </Header>
  );
};
