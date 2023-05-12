import styled from 'styled-components';
import { css } from '@mui/material/styles';
import { fontStylesCaption } from 'styles/typography';

export const PeriodWeek = styled.p`
  color: ${({ theme }) => theme.colors.textAttentionPrimary};
  ${fontStylesCaption}
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const gridTemplateStyled = css`
  grid-template-columns: repeat(3, minmax(200px, 1fr)) minmax(400px, 1fr);

  @media (max-width: 1023px) {
    grid-template-columns: 200px repeat(2, minmax(120px, 1fr)) minmax(320px, 1fr);
  }
`;
