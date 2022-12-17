import styled from 'styled-components';

interface PercentBarProps {
  percent: number;
}

interface WidthProps {
  maxWidth: number;
}

export const PercentBar = ({ percent }: PercentBarProps) => (
  <Wrapper>
    <PercentText>{percent}%</PercentText>
    <ColorBlock maxWidth={percent}></ColorBlock>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  height: 26px;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
`;

const PercentText = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  line-height: 24px;
  justify-content: center;
`;

const ColorBlock = styled.div<WidthProps>`
  height: 100%;
  background-color: ${({ maxWidth }) =>
    maxWidth >= 70 ? '#f44336' : maxWidth < 70 && maxWidth >= 40 ? '#efbb5aa3' : '#088208a3'};
  max-width: ${({ maxWidth }) => maxWidth}%;
`;
