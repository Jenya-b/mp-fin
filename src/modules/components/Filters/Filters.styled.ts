import styled from 'styled-components';
import { fontStylesCaption, fontStylesCaptionBig, fontStylesH2 } from 'styles/typography';

export const Filters = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (${({ theme }) => theme.media.large}) {
    grid-row: 1/2;
    grid-column: 1/2;
    display: grid;
    grid-template: repeat(3, auto) / repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 20px;
  }

  @media (${({ theme }) => theme.media.small}) {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const Filter = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h2`
  ${fontStylesH2}

  @media (${({ theme }) => theme.media.large}) {
    grid-row: 1/2;
    grid-column: 1/3;
  }

  @media (${({ theme }) => theme.media.small}) {
    display: none;
  }
`;

export const Subtitle = styled.h3`
  ${fontStylesCaptionBig}
`;

export const List = styled.ul`
  margin-top: 10px;
  padding-right: 20px;
  max-height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (${({ theme }) => theme.media.large}) {
    max-height: 200px;
  }
`;

export const Label = styled.label`
  ${fontStylesCaption}
`;
