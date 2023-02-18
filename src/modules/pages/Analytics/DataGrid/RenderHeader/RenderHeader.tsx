import { HeaderName, Parameter, Wrapper } from './RenderHeader.styled';

interface RenderHeaderProps {
  headerName: string;
  sum: number;
}

export const RenderHeader = ({ headerName, sum }: RenderHeaderProps) => (
  <Wrapper title={headerName}>
    <HeaderName>{headerName}</HeaderName>
    <Parameter>{sum.toLocaleString('ru-RU')}</Parameter>
  </Wrapper>
);
