import axios from '../../../utils/api/axios';
import { useEffect, useState } from 'react';
import { tableControlIcon } from '../../../constants/images';
import { Main, MainTitle } from '../../../styles/components';
import { useDeleteReportMutation, useGetReportsQuery } from '../../../utils/api/productApi';
import { IReport } from '../../../utils/api/types';
import { Loader } from '../../components/loader/Loader';
import { InputFile } from '../../components/table/InputFile';
import { BasicTable } from '../../components/table/Table';
import { TableButton } from '../../components/table/TableBtn';
import { StyledTableCell, StyledTableCellColl } from '../../components/table/TableCell';
import { v4 } from 'uuid';
import { reportColumnNames } from '../../../constants/table';
import { ControlsWrapper, PeriodWeek, SubtitleColl } from './Reports.styled';

export const ReportsPage = () => {
  const { data: reportList, refetch, isLoading: isLoadingGetData } = useGetReportsQuery(null);
  const [deleteReport, { isSuccess: isSuccessDelete, isLoading: isLoadingDelete }] =
    useDeleteReportMutation();
  const [isLoadingUpload, setIsLoadingUpload] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccessDelete) {
      refetch();
    }
  }, [isSuccessDelete]);

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
            <InputFile
              weekDataId={item.weekId}
              stateId={item.stateId}
              handleChange={uploadFile}
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
          />
        </ControlsWrapper>
      </StyledTableCell>
    </>
  );

  const renderColumnNames = () => (
    <>
      {reportColumnNames.map((item) => (
        <StyledTableCellColl key={v4()}>
          {item.title} <SubtitleColl>{item.subtitle}</SubtitleColl>
        </StyledTableCellColl>
      ))}
    </>
  );

  const uploadFile = (
    weekDataId: string,
    stateId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = event.target;
    const formData = new FormData();

    if (files) {
      formData.append('myExcelDatas', files[0]);
      setIsLoadingUpload(true);

      const dataPost = {
        myExcelDatas: formData.get('myExcelDatas'),
        weekDataId: weekDataId,
        stateId: stateId,
      };

      axios
        .post('/Product/SaveProducts', dataPost)
        .then((res) => res.data)
        .then(() => refetch())
        .then(console.log)
        .catch(console.log)
        .finally(() => setIsLoadingUpload(false));
    }
  };

  const deleteRow = ({ weekDataId, stateId }: { weekDataId: string; stateId: string }) => {
    deleteReport({ weekDataId, stateId });
  };

  return (
    <Main>
      {(isLoadingUpload || isLoadingDelete || isLoadingGetData) && <Loader />}
      <MainTitle>Загруженные отчеты</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={reportList} />
    </Main>
  );
};
