import styled from 'styled-components';
import { fontStylesCaptionBig } from 'styles/typography';

export const NavWrapper = styled.div`
  ${fontStylesCaptionBig}
  padding: 30px 0 20px 0;
  display: flex;
  column-gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.adminMenuLink};

    &.active {
      color: ${({ theme }) => theme.colors.adminMenuLinkActive};
      border-bottom: 1px solid;
    }
  }
`;
