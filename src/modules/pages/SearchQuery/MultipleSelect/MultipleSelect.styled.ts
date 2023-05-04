import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  width: 300px;

  @media (max-width: 1279px) {
    width: 250px;
  }

  @media (max-width: 1023px) {
    width: 200px;
  }
`;
