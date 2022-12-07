import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fontStylesCaptionBig, fontStylesH1, fontStylesH2 } from 'styles/typography';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
  <Wrapper>
    <Title>Oops!</Title>
    <Desc>{error.message}</Desc>
    <Control>
      Попробуйте перезапустить страницу или{' '}
      <StyledLink to="/" onClick={resetErrorBoundary}>
        перейти на главную
      </StyledLink>
    </Control>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr repeat(3, auto) 1fr/ 1fr minmax(auto, 1200px) 1fr;
  align-items: center;
  row-gap: 40px;
`;

const Title = styled.h1`
  grid-row: 2/3;
  grid-column: 2/3;
  ${fontStylesH1}
  font-size: ${({ theme }) => theme.sizes.errorFallback.title.fontSize}px;
  text-align: center;
`;

const Desc = styled.h2`
  grid-row: 3/4;
  grid-column: 2/3;
  ${fontStylesH2}
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const Control = styled.h3`
  ${fontStylesCaptionBig}
  grid-row: 4/5;
  grid-column: 2/3;
  text-align: center;
`;
