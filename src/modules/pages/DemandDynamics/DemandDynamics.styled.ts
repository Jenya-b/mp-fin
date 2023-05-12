import styled from 'styled-components';
import { PrimaryInput } from 'styles/components';

export const InputSearch = styled(PrimaryInput)`
  margin-top: 7px;
  width: 350px;

  @media (${({ theme }) => theme.media.small}) {
    width: 100%;
  }
`;

export const DataBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;

  @media (${({ theme }) => theme.media.extraLarge}) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (${({ theme }) => theme.media.large}) {
    grid-template: auto minmax(300px, max-content) / 1fr;
  }
`;
