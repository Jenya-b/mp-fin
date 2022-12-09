import styled from 'styled-components';
import { Button } from 'styles/components';
import { fontStylesCaption, fontStylesCaptionBig, fontStylesH2 } from 'styles/typography';

export const Wrapper = styled.div`
  display: grid;
  grid: 1fr / minmax(100px, max-content) auto;
`;

export const Filters = styled.div`
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

export const Visualization = styled.div``;

export const ButtonFilter = styled(Button)`
  margin-top: 15px;
  padding: 8px 15px;
  ${fontStylesCaption}
`;
