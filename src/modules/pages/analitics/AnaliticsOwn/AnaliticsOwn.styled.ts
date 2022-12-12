import styled from 'styled-components';
import { Button } from 'styles/components';
import { fontStylesCaption, fontStylesCaptionBig, fontStylesH2 } from 'styles/typography';

export const Wrapper = styled.div`
  display: grid;
  grid-template: auto 500px / max-content auto;
  column-gap: 40px;
  row-gap: 40px;
`;

export const Filters = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Filter = styled.div``;

export const Title = styled.h2`
  ${fontStylesH2}
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
`;

export const Item = styled.li``;

export const Label = styled.label`
  ${fontStylesCaption}
`;

export const Input = styled.input``;

export const Diagram = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  width: 100%;
`;

export const Table = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;
`;

export const ButtonFilter = styled(Button)`
  margin-top: 15px;
  padding: 8px 15px;
  ${fontStylesCaption}
`;
