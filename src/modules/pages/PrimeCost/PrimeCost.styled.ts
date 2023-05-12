import { css } from '@mui/material/styles';

export const gridTemplateStyled = css`
  grid-template-columns: repeat(3, minmax(250px, 1fr));

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
`;
