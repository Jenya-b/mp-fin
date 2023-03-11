import styled from 'styled-components';
import { MainSubtitle } from 'styles/components';
import { fontStylesCaption } from 'styles/typography';

export const Subtitle = styled(MainSubtitle)`
  margin-bottom: ${({ theme }) => theme.indents.adminSubtitle.marginBottom}px;
  grid-column: 1/4;
  grid-row: 1/2;
`;

export const SearchBlock = styled.div`
  margin-top: ${({ theme }) => theme.indents.adminSearchBlock.marginTop}px;
  display: grid;
  column-gap: 20px;
  grid-template: max-content auto / 300px 300px 1fr;
  align-items: flex-end;
`;

export const Label = styled.label`
  ${fontStylesCaption}
`;

export const TablesBlock = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  background: ${({ theme }) => theme.colors.tableGridBg};
  border: 1px solid ${({ theme }) => theme.colors.inputFormBorder};
  border-radius: ${({ theme }) => theme.borders.inputForm.borderRadius}px;
  overflow: hidden;
  overflow-x: scroll;
`;
