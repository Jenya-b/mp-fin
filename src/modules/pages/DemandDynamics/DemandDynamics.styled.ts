import styled from 'styled-components';
import { PrimaryInput } from 'styles/components';

export const InputSearch = styled(PrimaryInput)`
  margin-top: 7px;
  max-width: 300px;
`;

export const DataBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;
