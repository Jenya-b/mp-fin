import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { tableControlIcon } from 'constants/images';
import { Main, MainTitle } from 'styles/components';
import { useDeleteReportMutation, useGetReportsQuery } from 'services';
import { IReport } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { InputFile } from 'modules/components/Table/InputFile';
import { BasicTable } from 'modules/components/Table/Table';
import { TableButton } from 'modules/components/Table/TableBtn';
import { StyledTableCell, StyledTableCellColl } from 'modules/components/Table/TableCell';
import { reportColumnNames } from 'constants/table';
import { ControlsWrapper, PeriodWeek, SubtitleColl } from 'modules/pages/Reports/Reports.styled';
import { BasicDialog } from 'modules/components/Dialog/Dialog';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchReportFiles } from 'services/api/filesApi';
import { INPUT_FILE_TYPE, MAX_FILES } from 'constants/files';
import { Notification } from 'modules/components/Notification/Notification';
import { alertMessage } from 'constants/alert';
import { openNotify } from 'store/reducers/notifySlice';

export const ReportsPage = () => {
  const dispatch = useAppDispatch();
  const [isActiveDialog, setActiveDialog] = useState<boolean>(false);
  const [weekDataId, setWeekDataId] = useState<string>('');
  const [stateId, setStateId] = useState<string>('');
  const { data: reportList, refetch, isLoading: isLoadingGetData } = useGetReportsQuery(null);
  const [
    deleteReport,
    { isSuccess: isSuccessDelete, isLoading: isLoadingDelete, isError: isErrorDelete },
  ] = useDeleteReportMutation();
  const {
    isLoading: isLoadingUpload,
    isError: isErrorUploadFile,
    isSuccess: isSuccessUploadFile,
  } = useAppSelector((state) => state.fileReportReducer);
  const { isOpenNotify, notifyMessage } = useAppSelector((state) => state.notifyReducer);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isSuccessDelete) {
      refetch();
      dispatch(openNotify(alertMessage.successDeleteReport));
    }
  }, [isSuccessDelete]);

  useEffect(() => {
    if (isErrorDelete) {
      dispatch(openNotify(alertMessage.errorDeleteReport));
    }
    if (isSuccessUploadFile) {
      dispatch(openNotify(alertMessage.successUploadReport));
    }
    if (isErrorUploadFile) {
      dispatch(openNotify(alertMessage.warningUploadReport));
    }
  }, [isErrorDelete, isSuccessUploadFile, isErrorUploadFile]);

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

    if (!files) return;
    if (files.length > MAX_FILES) {
      dispatch(openNotify(alertMessage.errorUploadReportValidCount));

      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type !== INPUT_FILE_TYPE) {
        dispatch(openNotify(alertMessage.errorUploadReportValidType));
        return;
      }
      formData.append(`myExcelDatas${i}`, file);
    }

    formData.set(`weekDataId`, weekDataId);
    formData.set(`stateId`, stateId);

    dispatch(fetchReportFiles(formData)).then(() => refetch());
  };

  const deleteRow = ({ weekDataId, stateId }: { weekDataId: string; stateId: string }) => {
    setWeekDataId(weekDataId);
    setStateId(stateId);
    setActiveDialog(true);
  };

  const closeDialogWindow = () => {
    setActiveDialog(false);
  };

  const confirmAction = () => {
    deleteReport({ weekDataId, stateId });
    closeDialogWindow();
  };

  return (
    <Main>
      {(isLoadingUpload || isLoadingDelete || isLoadingGetData) && <Loader />}
      <Notification notifyMessage={notifyMessage} isOpenNotify={isOpenNotify} />
      <BasicDialog
        isActiveDialog={isActiveDialog}
        handleClose={closeDialogWindow}
        handleConfirm={confirmAction}
        desc="Вы действительно хотите удалить отчет?"
      />
      <MainTitle>Загруженные отчеты</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={reportList} />
    </Main>
  );
};

export default ReportsPage;
