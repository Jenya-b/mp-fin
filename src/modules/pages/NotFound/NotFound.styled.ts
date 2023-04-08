import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryButton } from 'styles/components';
import { fontStylesCaptionBig, fontStylesH1, fontStylesH2 } from 'styles/typography';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr repeat(3, auto) 1fr/ 1fr minmax(auto, 1200px) 1fr;
  align-items: center;
  row-gap: 40px;
`;
export const Title = styled.h1`
  grid-row: 2/3;
  grid-column: 2/3;
  ${fontStylesH1}
  font-size: ${({ theme }) => theme.sizes.notFound.title.fontSize}px;
  text-align: center;
`;
export const Subtitle = styled.h2`
  grid-row: 3/4;
  grid-column: 2/3;
  ${fontStylesH2}
  text-align: center;
`;
export const NotFoundButton = styled(PrimaryButton)`
  ${fontStylesCaptionBig}
  padding: 10px 30px;
`;
export const StyledLink = styled(Link)`
  grid-row: 4/5;
  grid-column: 2/3;
  margin-left: auto;
  margin-right: auto;
`;
