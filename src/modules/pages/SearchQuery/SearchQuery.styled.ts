import styled from 'styled-components';
import { MainSubtitle, PrimaryInput, SecondaryButton } from 'styles/components';
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
  grid-template: max-content auto / repeat(3, minmax(200px, 350px));
  align-items: flex-end;

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 10px;
  }
`;

export const Label = styled.label`
  ${fontStylesCaption};

  @media (${({ theme }) => theme.media.medium}) {
    width: 100%;
  }
`;

export const InputSearch = styled(PrimaryInput)`
  width: 100%;
`;

export const Button = styled(SecondaryButton)`
  width: 100%;
`;
