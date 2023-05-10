import styled from 'styled-components';
import { fontStylesH2 } from 'styles/typography';

export const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template: auto 500px / max-content auto;
  column-gap: 40px;
  row-gap: 40px;

  @media (${({ theme }) => theme.media.large}) {
    grid-template: auto auto 500px / 1fr;
  }

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 20px;
    row-gap: 20px;
  }
`;

export const Title = styled.h2`
  ${fontStylesH2}
`;

export const Diagram = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  row-gap: 50px;
  column-gap: 50px;

  @media (${({ theme }) => theme.media.large}) {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  @media (${({ theme }) => theme.media.large}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const Table = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;

  @media (${({ theme }) => theme.media.large}) {
    grid-row: 3/4;
    grid-column: 1/2;
  }
`;
