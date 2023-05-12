import { css } from '@mui/material/styles';

export const gridTemplateStyled = css`
  grid-template-columns: repeat(3, minmax(250px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: minmax(130px, 1fr) repeat(2, minmax(200px, 1fr));
  }
`;
