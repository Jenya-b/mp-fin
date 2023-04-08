import { Wrapper, NotFoundButton, StyledLink, Subtitle, Title } from './NotFound.styled';
import { routerPath } from 'constants/routerPath';

export const NotFoundPage = () => {
  const { home } = routerPath;

  return (
    <Wrapper>
      <Title>Ошибка 404</Title>
      <Subtitle>
        Кажется что-то пошло не так! Страница, которую Вы запрашиваете, не существует. Возможно она
        устарела, была удалена, или был введен неверный адрес в адресной строке.
      </Subtitle>
      <StyledLink to={home}>
        <NotFoundButton>Перейти на главную</NotFoundButton>
      </StyledLink>
    </Wrapper>
  );
};

export default NotFoundPage;
