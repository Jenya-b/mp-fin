import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Box, IconButton, Tab, Tabs } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDebounce } from 'hooks';
import { InputSearch, DataBlock, Button } from './DemandDynamics.styled';
import { Main, MainTitle } from 'styles/components';
import { useGetWbQueriesQuery } from 'services';
import { SearchQueryChart } from './Chart';
import { OneWbQueriesType, TopWbQueriesType } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'store/store';
import { notifySelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/alert';
import { Notification } from 'modules/components/Notification/Notification';
import { Label, SearchBlock } from '../SearchQuery/SearchQuery.styled';
import { Table } from './Table/Table';
import { data as response, typesSearchQuery } from './data';
import { formatDateGeneral, getDefaultValueByInputDate } from 'utils';
import { Modal } from './Dialog';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const DemandDynamics = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [chartData, setChartData] = useState<OneWbQueriesType[]>([]);
  const [tab, setTab] = useState(0);
  const [dateFrom, setDateFrom] = useState<string>(getDefaultValueByInputDate(new Date(), -30));
  const [dateTo, setDateTo] = useState<string>(getDefaultValueByInputDate(new Date()));
  const debouncedSearch = useDebounce(searchValue, 600);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);

  const { isLoading, isFetching, data, refetch } = useGetWbQueriesQuery(debouncedSearch);

  useEffect(() => {
    if (!!debouncedSearch) {
      clearData();
      return;
    }
    refetch();
  }, [debouncedSearch]);

  useEffect(() => {
    if (!data) return;
    const { all, one } = data;
    if (!(all.length || one.length)) {
      clearData();
      dispatch(openNotify(alertMessage.infoSearchQuery));
      return;
    }
    setChartData(one);
  }, [data]);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  const clearData = () => {
    setChartData([]);
  };

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
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

  return (
    <Main>
      <MainTitle>Динамика запросов</MainTitle>
      {(isLoading || isFetching) && <Loader />}
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
        <Button>Добавить в список</Button>
      </Box>
      <Box sx={{ display: 'flex', columnGap: '15px' }}>
        <Tabs value={tab} onChange={handleChangeTabs} aria-label="basic tabs example">
          {typesSearchQuery.map(({ id, name }) => (
            <Tab key={id} label={name} {...a11yProps(id)} />
          ))}
        </Tabs>
        <Modal open={openModal} handleClose={handleClose} />
        <IconButton color="primary" onClick={handleClickOpen}>
          <AddBoxIcon />
        </IconButton>
      </Box>
      <DataBlock>
        <Table response={response} interval={1} />
        <SearchQueryChart mainData={chartData} />
      </DataBlock>
    </Main>
  );
};

export default DemandDynamics;
