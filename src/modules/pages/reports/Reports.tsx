import styled from 'styled-components';
import { tableControlIcon } from '../../../constants/images';
import { Main, MainTitle } from '../../../styles/components';
import { fontStylesCaption } from '../../../styles/typography';
import { useDeleteReportMutation, useGetReportsQuery } from '../../../utils/api/productApi';
import { IReport } from '../../../utils/api/types';
import { BasicTable } from '../../components/table/Table';
import { TableButton } from '../../components/table/TableBtn';
import { StyledTableCell, StyledTableCellColl } from '../../components/table/TableCell';

export const ReportsPage = () => {
  const { data: reportList } = useGetReportsQuery(null);
  const [deleteReport] = useDeleteReportMutation();

  const renderRow = (item: IReport) => (
    <>
      <StyledTableCell>
        Неделя {item.weekNumber} <PeriodWeek>{`${item.startWeek}-${item.endWeek}`}</PeriodWeek>
      </StyledTableCell>
      <StyledTableCell>{`${item.saled} ₽`}</StyledTableCell>
      <StyledTableCell>{`${item.logistik} ₽`}</StyledTableCell>
      <StyledTableCell>
        <ControlsWrapper>
          {!item.isReportSaved ? (
            <TableButton
              handleClick={addReport}
              title={'Загрузить отчет'}
              src={tableControlIcon.uploadReport}
            />
          ) : (
            <>Отчет загружен</>
          )}
          <TableButton
            handleClick={() => deleteRow({ weekDataId: item.weekId, stateId: item.stateId })}
            title={'Удалить'}
            src={tableControlIcon.deleteReportRow}
          >
            Удалить
          </TableButton>
        </ControlsWrapper>
      </StyledTableCell>
    </>
  );

  const renderColumnNames = () => (
    <>
      <StyledTableCellColl style={{ verticalAlign: 'top' }}>Неделя</StyledTableCellColl>
      <StyledTableCellColl style={{ verticalAlign: 'top' }}>
        Продажи
        <SubtitleColl>(сумма)</SubtitleColl>
      </StyledTableCellColl>
      <StyledTableCellColl style={{ verticalAlign: 'top' }}>
        Заказы
        <SubtitleColl>(сумма)</SubtitleColl>
      </StyledTableCellColl>
      <StyledTableCellColl style={{ verticalAlign: 'top' }}>Действия</StyledTableCellColl>
    </>
  );

  const addReport = () => {};

  const deleteRow = ({ weekDataId, stateId }: { weekDataId: string; stateId: string }) => {
    deleteReport({ weekDataId, stateId });
  };

  return (
    <Main>
      <MainTitle>Загруженные отчеты</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={reportList} />
    </Main>
  );
};

const PeriodWeek = styled.p`
  color: ${({ theme }) => theme.colors.tableReportDate};
  ${fontStylesCaption}
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubtitleColl = styled.div`
  color: ${({ theme }) => theme.colors.tableReportSubtitleColl};
  ${fontStylesCaption}
`;
