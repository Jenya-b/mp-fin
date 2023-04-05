import { ColorBlock, PercentText, Wrapper } from './PercentBar.styled';

interface PercentBarProps {
  value: number;
  maxValue: number;
}

export const PercentBar = ({ value, maxValue }: PercentBarProps) => {
  const percent = (100 / maxValue) * value;

  return (
    <Wrapper>
      <PercentText>{value.toLocaleString('ru-RU')}</PercentText>
      <ColorBlock maxWidth={percent} data-testid="percent-color"></ColorBlock>
    </Wrapper>
  );
};
