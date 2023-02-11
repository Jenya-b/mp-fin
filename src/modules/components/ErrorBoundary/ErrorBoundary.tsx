import { useRouteError } from 'react-router-dom';
import { Control, Desc, StyledLink, Title, Wrapper } from './ErrorBoundary.styled';

export const ErrorBoundary = () => {
  const error = useRouteError() as { message: string };

  return (
    <Wrapper>
      <Title>Oops!</Title>
      <Desc>{error.message}</Desc>
      <Control>
        Попробуйте перезапустить страницу или <StyledLink to="/">перейти на главную</StyledLink>
      </Control>
    </Wrapper>
  );
};
