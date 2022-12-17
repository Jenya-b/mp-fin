import { ColorBlock, PercentText, Wrapper } from './PercentBar.styled';

interface PercentBarProps {
  value: number;
  maxValue: number;
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
