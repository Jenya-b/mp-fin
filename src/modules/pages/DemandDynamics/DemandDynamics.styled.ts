import styled from 'styled-components';
import { PrimaryButton, PrimaryInput } from 'styles/components';
import { fontStylesCaption } from 'styles/typography';

export const InputSearch = styled(PrimaryInput)`
  margin-top: 7px;
  width: 350px;

  @media (${({ theme }) => theme.media.small}) {
    width: 100%;
  }
`;

export const DataBlock = styled.div`
  display: grid;
  grid-template: minmax(300px, max-content) auto / 1fr;
`;

export const Button = styled(PrimaryButton)`
  padding: 10px 15px;
  max-width: 180px;
  width: 100%;
`;

export const Tabs = styled.div`
  margin: 10px 0;
  display: flex;
  column-gap: 10px;
  text-transform: uppercase;
  ${fontStylesCaption}
`;

export const Tab = styled.div`
  padding: 5px 3px;
  cursor: pointer;

  &.active {
    font-weight: 600;
    color: blue;
  }
`;
