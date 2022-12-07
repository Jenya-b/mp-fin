import { balanceColumnNames } from 'constants/table';
import { useAppSelector } from 'hooks/redux';
import { Main, MainTitle, MainSubtitle } from 'styles/components';
import { BasicTable } from 'modules/components/Table/Table';
import { StyledTableCellColl } from 'modules/components/Table/TableCell';
import { BalanceWrapper, HistoryBlock } from 'modules/pages/Balance/Balance.styled';
import { Replenishment } from 'modules/pages/Balance/Replenishment';

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
