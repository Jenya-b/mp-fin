import { useAppSelector } from '../../../hooks/redux';
import { Main, MainTitle, MainSubtitle } from '../../../styles/components';
import { BalanceWrapper, HistoryBlock } from './Balance.styled';
import { Replenishment } from './Replenishment';

export const BalancePage = () => {
  const { currentBalance } = useAppSelector((state) => state.balanceReducer);

  return (
    <Main>
      <MainTitle>Баланс и пополнение</MainTitle>
      <BalanceWrapper>
        <Replenishment currentBalance={currentBalance ?? 0} />
        <HistoryBlock>
          <MainSubtitle>История операций</MainSubtitle>
        </HistoryBlock>
      </BalanceWrapper>
    </Main>
  );
};

export default BalancePage;
