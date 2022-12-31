import styled from 'styled-components';
import { fontStylesCaption, fontStylesCaptionBig, fontStylesH2 } from 'styles/typography';

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
