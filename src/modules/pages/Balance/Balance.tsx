import { balanceColumnNames } from 'constants/tables';
import { useAppSelector } from 'store/store';
import { Main, MainTitle, MainSubtitle } from 'styles/components';
import { BasicTable } from 'modules/components/Table/Table';
import {
  BalanceWrapper,
  HistoryBlock,
  gridTemplateStyled,
} from 'modules/pages/Balance/Balance.styled';
import { Replenishment } from 'modules/pages/Balance/Replenishment/Replenishment';
import { TableColumns } from 'modules/components/Table/TableColumns/TableColumns';
import { balanceSelector } from 'store/selectors';

export const BalancePage = () => {
  const currentBalance = useAppSelector(balanceSelector);

  const renderColumnNames = () => <TableColumns columnNames={balanceColumnNames} />;

  const renderRow = (item: string) => <></>;

  return (
    <Main style={{ overflow: 'hidden' }}>
      <MainTitle>Баланс и пополнение</MainTitle>
      <BalanceWrapper>
        <Replenishment currentBalance={currentBalance ?? 0} />
        <HistoryBlock>
          <MainSubtitle>История операций</MainSubtitle>
          <BasicTable
            renderRow={renderRow}
            renderColumnNames={renderColumnNames}
            data={[]}
            gridTemplateStyled={gridTemplateStyled}
          />
        </HistoryBlock>
      </BalanceWrapper>
    </Main>
  );
};

export default BalancePage;
