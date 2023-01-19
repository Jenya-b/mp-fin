import styled from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`;
const HeaderName = styled.div`
  height: 20px;
`;
const Parameter = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #1976d2;
`;
