import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'styles/components';
import { fontStylesCaptionBig, fontStylesH1, fontStylesH2 } from 'styles/typography';

export const NotFoundPage = () => (
  <Wrapper>
    <Title>Ошибка 404</Title>
    <Subtitle>
      Кажется что-то пошло не так! Страница, которую Вы запрашиваете, не существует. Возможно она
      устарела, была удалена, или был введен неверный адрес в адресной строке.
    </Subtitle>
    <Link to="/">
      <NotFoundButton>Перейти на главную</NotFoundButton>
    </Link>
  </Wrapper>
);

export default NotFoundPage;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr repeat(3, auto) 1fr/ 1fr minmax(auto, 1200px) 1fr;
  align-items: center;
  row-gap: 40px;
  a {
    grid-row: 4/5;
    grid-column: 2/3;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Title = styled.h1`
  grid-row: 2/3;
  grid-column: 2/3;
  ${fontStylesH1}
  font-size: ${({ theme }) => theme.sizes.notFoundBg.title.fontSize}px;
  text-align: center;
`;
const Subtitle = styled.h2`
  grid-row: 3/4;
  grid-column: 2/3;
  ${fontStylesH2}
  text-align: center;
`;
const NotFoundButton = styled(Button)`
  ${fontStylesCaptionBig}
  padding: 10px 30px;
`;
