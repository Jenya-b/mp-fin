import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Box, IconButton, Pagination } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import EditIcon from '@mui/icons-material/Edit';
import { useDebounce } from 'hooks';
import { InputSearch, DataBlock, Button, Tabs, Tab } from './DemandDynamics.styled';
import { Main, MainTitle } from 'styles/components';
import {
  useGetQDFDataQuery,
  useGetQueryDynamicsFoldersQuery,
  useRemoveDataToFolderMutation,
} from 'services';
import { Loader } from 'modules/components/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'store/store';
import { analiticsSelector, notifySelector } from 'store/selectors';
import { Notification } from 'modules/components/Notification/Notification';
import { Label, SearchBlock } from '../SearchQuery/SearchQuery.styled';
import { Table } from './Table/Table';
import { formatDateGeneral, getDefaultValueByInputDate } from 'utils';
import { NewFolderDialog } from './NewFolderDialog';
import { RemoveFolderDialog } from './RemoveFolderDialog';
import { UpdateFolderDialog } from './UpdateFolderDialog';
import { clearSelectedQDFData } from 'store/reducers/analitics';
import { InserDataToFolderDialog } from './InserDataToFolderDialog';

export const DemandDynamics = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [dateFrom, setDateFrom] = useState<string>(getDefaultValueByInputDate(new Date(), -30));
  const [dateTo, setDateTo] = useState<string>(getDefaultValueByInputDate(new Date()));
  const debouncedSearch = useDebounce(searchValue, 600);
  const [openNewFolderDialog, setOpenModal] = useState(false);
  const [openRemoveFolderDialog, setOpenRemoveFolderDialog] = useState(false);
  const [openUpdateFolderDialog, setOpenUpdateFolderDialog] = useState(false);
  const [openInserDatatoFolderDialog, setOpenInserDatatoFolderDialog] = useState(false);
  const dispatch = useAppDispatch();
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);
  const { selectedQDFData } = useAppSelector(analiticsSelector);

  const {
    data,
    isLoading: isLoadingGetData,
    isFetching: isFetchingGetData,
    refetch: refetchTableData,
  } = useGetQDFDataQuery({
    search: debouncedSearch,
    page,
    typeid: tab,
    dateFrom,
    dateTo,
  });
  const {
    data: folders,
    isLoading: isLoadingFolders,
    refetch: refetchFolders,
  } = useGetQueryDynamicsFoldersQuery(null);
  const [fetchRemoveDataToFolder] = useRemoveDataToFolderMutation();

  useEffect(() => {
    setPage(1);
    dispatch(clearSelectedQDFData());
    console.log(tab);
  }, [tab]);

  useEffect(() => {
    refetchTableData();
  }, [page, dateFrom, dateTo]);

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  const handleChangeTabs = (newValue: number) => {
    setTab(newValue);
  };

  const handleChangeDateTo = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateTo(formatDateGeneral(value, true));
  };

  const handleChangeDateFrom = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateFrom(formatDateGeneral(value, true));
  };

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const removeDataFromFolder = () => {
    if (!(tab && selectedQDFData.length)) {
      return;
    }

    fetchRemoveDataToFolder({ typeId: tab, queries: selectedQDFData });
  };

  return (
    <Main>
      <MainTitle>Динамика запросов</MainTitle>
      {(isLoadingFolders || isLoadingGetData || isFetchingGetData) && <Loader />}
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
        <SearchBlock>
          <Label>
            <InputSearch placeholder="Введите запрос" onChange={addSearchValue} />
          </Label>
          <Label>
            <InputSearch type="date" onChange={handleChangeDateFrom} defaultValue={dateFrom} />
          </Label>
          <Label>
            <InputSearch type="date" onChange={handleChangeDateTo} defaultValue={dateTo} />
          </Label>
        </SearchBlock>
        <div style={{ display: 'flex', columnGap: '10px' }}>
          <Button onClick={() => setOpenInserDatatoFolderDialog(true)}>Добавить в список</Button>
          <InserDataToFolderDialog
            open={openInserDatatoFolderDialog}
            handleClose={() => setOpenInserDatatoFolderDialog(false)}
            folders={folders}
            refetch={() => refetchFolders()}
          />
          {data && tab !== 0 && <Button onClick={removeDataFromFolder}>Удалить из списка</Button>}
        </div>
      </Box>
      <Box sx={{ display: 'flex', columnGap: '15px' }}>
        <Tabs>
          {(folders ?? []).map(({ id, name }) => (
            <Tab
              className={tab === id ? 'active' : ''}
              key={id}
              onClick={() => handleChangeTabs(id)}
            >
              {name}
            </Tab>
          ))}
        </Tabs>
        <NewFolderDialog
          open={openNewFolderDialog}
          handleClose={() => setOpenModal(false)}
          refetch={() => refetchFolders()}
        />
        <IconButton color="primary" onClick={() => setOpenModal(true)}>
          <AddBoxIcon />
        </IconButton>
        {folders && tab ? (
          <>
            <RemoveFolderDialog
              open={openRemoveFolderDialog}
              handleClose={() => setOpenRemoveFolderDialog(false)}
              folderId={tab}
              folderName={folders.find((folder) => folder.id === tab)?.name ?? ''}
              refetch={() => refetchFolders()}
            />
            <IconButton color="primary" onClick={() => setOpenRemoveFolderDialog(true)}>
              <FolderDeleteIcon />
            </IconButton>
            <UpdateFolderDialog
              open={openUpdateFolderDialog}
              handleClose={() => setOpenUpdateFolderDialog(false)}
              folderId={tab}
              folderName={folders.find((folder) => folder.id === tab)?.name ?? ''}
              refetch={() => refetchFolders()}
            />
            <IconButton color="primary" onClick={() => setOpenUpdateFolderDialog(true)}>
              <EditIcon />
            </IconButton>
          </>
        ) : (
          <></>
        )}
      </Box>
      {data ? (
        <DataBlock>
          <div style={{ overflow: 'auto' }}>
            <Table response={data} interval={1} />
            {!!data.totalCount && (
              <Pagination
                sx={{ marginTop: '10px' }}
                count={Math.ceil(data.totalCount / data.countOnPage)}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={handleChangePage}
              />
            )}
          </div>
        </DataBlock>
      ) : (
        <p>Нет данных для отображения</p>
      )}
    </Main>
  );
};

export default DemandDynamics;
