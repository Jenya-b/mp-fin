import { balanceColumnNames } from 'constants/table';
import { useAppSelector } from 'hooks/redux';
import { Main, MainTitle, MainSubtitle } from 'styles/components';
import { BasicTable } from 'modules/components/table/Table';
import { StyledTableCellColl } from 'modules/components/table/TableCell';
import { BalanceWrapper, HistoryBlock } from 'modules/pages/balance/Balance.styled';
import { Replenishment } from 'modules/pages/balance/Replenishment';

export const BalancePage = () => {
  const { currentBalance } = useAppSelector((state) => state.balanceReducer);

  const historyList: string[] = [];

  const renderColumnNames = () => (
    <>
      {balanceColumnNames.map((item) => (
        <StyledTableCellColl key={item.title}>{item.title}</StyledTableCellColl>
      ))}
    </>
  );

  const renderRow = (item: string) => <></>;

  return (
    <Main>
      <MainTitle>Баланс и пополнение</MainTitle>
      <BalanceWrapper>
        <Replenishment currentBalance={currentBalance ?? 0} />
        <HistoryBlock>
          <MainSubtitle>История операций</MainSubtitle>
          <BasicTable
            renderRow={renderRow}
            renderColumnNames={renderColumnNames}
            data={historyList}
          />
        </HistoryBlock>
      </BalanceWrapper>
    </Main>
  );
};

export default BalancePage;
