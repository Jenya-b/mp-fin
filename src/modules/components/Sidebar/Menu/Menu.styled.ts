import styled from 'styled-components';
import { fontStylesRegular } from 'styles/typography';

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const Title = styled.p`
  ${fontStylesRegular}
  color: ${({ theme }) => theme.colors.sidebarTextMenu};
`;

export const MenuList = styled.ul`
  padding-top: 40px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
