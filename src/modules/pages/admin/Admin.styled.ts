import styled from 'styled-components';
import { fontStylesCaptionBig } from 'styles/typography';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / auto 1fr;
`;
export const Menu = styled.div`
  padding: 40px 25px 40px 30px;
  background: ${({ theme }) => theme.colors.adminMenuBg};
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const Item = styled.li`
  ${fontStylesCaptionBig}

  a {
    color: ${({ theme }) => theme.colors.adminMenuLink};

    &.active {
      color: ${({ theme }) => theme.colors.adminMenuLinkActive};
    }
  }
`;
export const Content = styled.div``;
