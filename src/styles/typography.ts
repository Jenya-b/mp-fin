import { css } from 'styled-components';

const fontsFamilyOpenSans = css`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
`;

const fontsFamilyInter = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;

export const fontStylesH1 = css`
  ${fontsFamilyOpenSans}
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
`;
export const fontStylesH2 = css`
  ${fontsFamilyOpenSans}
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
`;
export const fontStylesRegularBold = css`
  ${fontsFamilyOpenSans}
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;
export const fontStylesRegular = css`
  ${fontsFamilyOpenSans}
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;
export const fontStylesCaptionBig = css`
  ${fontsFamilyOpenSans}
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
export const fontStylesCaption = css`
  ${fontsFamilyInter}
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
export const fontStylesSmall = css`
  ${fontsFamilyInter}
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;
