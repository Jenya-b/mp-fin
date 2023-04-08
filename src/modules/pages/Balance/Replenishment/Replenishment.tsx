import { SecondaryButton } from 'styles/components';
import { balanceImg } from 'constants/images';
import {
  Wrapper,
  BalanceParam,
  BalanceTitle,
  ImageWrapp,
  Item,
  List,
  Span,
  WriteOffParam,
  WriteOffTitle,
} from './Replenishment.styled';

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
      <div>
        <SecondaryButton>Пополнить</SecondaryButton>
      </div>
    </List>
    <ImageWrapp>
      <img src={balanceImg} />
    </ImageWrapp>
  </Wrapper>
);
