import styled from 'styled-components';
import { PrimaryInput, MainSubtitle } from 'styles/components';
import { fontStylesCaption } from 'styles/typography';

export const Subtitle = styled(MainSubtitle)`
  margin-bottom: ${({ theme }) => theme.indents.adminSubtitle.marginBottom}px;
`;

export const SearchBlock = styled.div`
  margin-top: ${({ theme }) => theme.indents.adminSearchBlock.marginTop}px;
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled(PrimaryInput)`
  margin-top: 7px;
`;
export const Label = styled.label`
  position: relative;
  display: inline-block;
  ${fontStylesCaption}
`;
