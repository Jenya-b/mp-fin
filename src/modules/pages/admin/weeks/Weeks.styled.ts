import styled from 'styled-components';
import { Input } from 'styles/components';
import { fontStylesCaption } from 'styles/typography';

export const WeeksForm = styled.form`
  margin-top: 30px;
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  align-items: flex-end;
`;
export const InputDate = styled(Input)`
  margin-top: 7px;
`;
export const Label = styled.label`
  ${fontStylesCaption}
`;
