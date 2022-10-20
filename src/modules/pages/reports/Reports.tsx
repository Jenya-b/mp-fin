import TableCell from '@mui/material/TableCell';
import styled from 'styled-components';
import { Main, MainTitle } from '../../../styles/components';
import { useGetReportsQuery } from '../../../utils/api/productApi';
import { IReport } from '../../../utils/api/types';
import { BasicTable } from '../../components/table/Table';

export const ReportsPage = () => {
  const { data: reportList } = useGetReportsQuery(null);

  const renderRow = (item: IReport) => (
    <>
      <TableCell>
        <NumberWeek>Неделя 1</NumberWeek>
        <PeriodWeek>{`${item.startWeek}-${item.endWeek}`}</PeriodWeek>
      </TableCell>
      <TableCell>{`${item.saled} ₽`}</TableCell>
      <TableCell>{`${item.logistik} ₽`}</TableCell>
      <TableCell>
        <ControlsWrapper>
          <BtnAddReport onClick={addReport}>Загрузить</BtnAddReport>
          <BtnDelReport
            onClick={() => deleteReport({ weekDataId: item.weekId, stateId: item.stateId })}
          >
            Удалить
          </BtnDelReport>
        </ControlsWrapper>
      </TableCell>
    </>
  );

  const renderColumnNames = () => (
    <>
      <TableCell>Неделя</TableCell>
      <TableCell>Продажи</TableCell>
      <TableCell>Заказы</TableCell>
      <TableCell>Действия</TableCell>
    </>
  );

  const addReport = () => {};
  const deleteReport = ({ weekDataId, stateId }: { weekDataId: string; stateId: string }) => {
    console.log({ weekDataId, stateId });
  };

  return (
    <Main>
      <MainTitle>Загруженные отчеты</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={reportList} />
    </Main>
  );
};

const NumberWeek = styled.p``;
const PeriodWeek = styled.p``;
const ControlsWrapper = styled.div``;
const BtnAddReport = styled.div``;
const BtnDelReport = styled.div``;
