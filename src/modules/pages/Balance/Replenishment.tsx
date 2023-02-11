import styled from 'styled-components';
import { SecondaryButton } from 'styles/components';
import { fontStylesCaption, fontStylesH1, fontStylesRegularBold } from 'styles/typography';
import { balanceImg } from 'constants/images';

interface ReplenishmentProps {
  currentBalance: number;
}

export const Replenishment = ({ currentBalance }: ReplenishmentProps) => (
  <Wrapper>
    <List>
      <Item>
        <BalanceTitle>Ваш баланс</BalanceTitle>
        <BalanceParam>{currentBalance} ₽</BalanceParam>
      </Item>
      <Item>
        <WriteOffTitle>
          Списание <Span>0 ₽</Span>/день
        </WriteOffTitle>
        <WriteOffParam>
          Хватит на <Span>0</Span> дней
        </WriteOffParam>
      </Item>
      <Control>
        <SecondaryButton>Пополнить</SecondaryButton>
      </Control>
    </List>
    <ImageWrapp>
      <Image src={balanceImg}></Image>
    </ImageWrapp>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  padding: 30px 35px;
  border-radius: ${({ theme }) => theme.borders.replenishment.borderRadius}px;
  height: ${({ theme }) => theme.sizes.replenishmentBlock.height}px;
  background: ${({ theme }) => theme.colors.replenishmentBg};
  position: relative;
`;
const List = styled.div`
  display: grid;
  grid-template: 1fr 1.5fr 1fr / minmax(min-content, 613px);
  height: 100%;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BalanceTitle = styled.div`
  color: ${({ theme }) => theme.colors.replenishmentBalance};
  ${fontStylesRegularBold}
`;
const BalanceParam = styled.div`
  ${fontStylesH1}
`;
const WriteOffTitle = styled.div`
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.replenishmentWriteOff};
`;
const WriteOffParam = styled.div`
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.replenishmentWriteOff};
`;
const Span = styled.span`
  color: ${({ theme }) => theme.colors.replenishmentSpan};
`;
const Control = styled.div``;
const ImageWrapp = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
const Image = styled.img``;
