import styled from 'styled-components';
import { fontStylesCaption } from 'styles/typography';

export const PeriodWeek = styled.p`
  color: ${({ theme }) => theme.colors.tableReportDate};
  ${fontStylesCaption}
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubtitleColl = styled.div`
  color: ${({ theme }) => theme.colors.tableReportSubtitleColl};
  ${fontStylesCaption}
`;
