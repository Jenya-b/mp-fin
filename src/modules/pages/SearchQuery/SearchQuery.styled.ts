import styled from 'styled-components';
import { MainSubtitle, SecondaryButton } from 'styles/components';
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

export const Button = styled(SecondaryButton)`
  width: 300px;
`;
