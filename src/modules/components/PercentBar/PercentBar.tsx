import styled from 'styled-components';

interface PercentBarProps {
  value: number;
  maxValue: number;
}

interface WidthProps {
  maxWidth: number;
}

export const PercentBar = ({ value, maxValue }: PercentBarProps) => {
  const percent = (100 / maxValue) * value;

  return (
    <Wrapper>
      <PercentText>{value}</PercentText>
      <ColorBlock maxWidth={percent}></ColorBlock>
    </Wrapper>
  );
};

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
    maxWidth >= 70 ? '#088208a3' : maxWidth < 70 && maxWidth >= 40 ? '#efbb5aa3' : '#f44336'};
  max-width: ${({ maxWidth }) => maxWidth}%;
`;
