import styled from 'styled-components';
import { fontStylesCaption, fontStylesCaptionBig } from 'styles/typography';
import { PrimaryInput } from 'styles/components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / auto 1fr;
`;
export const Menu = styled.div`
  padding-top: ${({ theme }) => theme.indents.adminMenu.paddingTop}px;
  padding-right: ${({ theme }) => theme.indents.adminMenu.paddingRight}px;
  padding-bottom: ${({ theme }) => theme.indents.adminMenu.paddingBottom}px;
  padding-left: ${({ theme }) => theme.indents.adminMenu.paddingLeft}px;
  background: ${({ theme }) => theme.colors.adminMenuBg};
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.indents.adminList.rowGap}px;
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

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.indents.adminContainer.marginTop}px;
`;

export const Form = styled.form`
  max-width: ${({ theme }) => theme.sizes.adminForm.maxWidth}px;
  width: ${({ theme }) => theme.sizes.adminForm.width}%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${({ theme }) => theme.indents.adminForm.columnGap}px;
  align-items: flex-end;
`;
export const InputAdminPanel = styled(PrimaryInput)`
  margin-top: 7px;
`;
export const Label = styled.label`
  position: relative;
  display: inline-block;
  ${fontStylesCaption}
`;
