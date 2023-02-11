import { FormEvent, useEffect, useState } from 'react';
import { useDebounce } from 'hooks';
import { InputSearch, DataBlock } from './SearchByName.styled';
import { useGetWbQueriesQuery } from 'services';
import { SearchQueryChart } from './Chart';
import { OneWbQueriesType, TopWbQueriesType } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { SearchQueryDataGrid } from './DataGrid';
import { useAppDispatch, useAppSelector } from 'store/store';
import { notifySelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/alert';
import { Notification } from 'modules/components/Notification/Notification';
import { Label, SearchBlock, Subtitle } from '../SearchQuery.styled';

export const SearchByName = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [chartData, setChartData] = useState<OneWbQueriesType[]>([]);
  const [gridData, setGridData] = useState<TopWbQueriesType[]>([]);
  const debouncedSearch = useDebounce(searchValue, 600);
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
    setGridData(all);
  }, [data]);

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  const clearData = () => {
    setChartData([]);
    setGridData([]);
  };

  return (
    <>
      {(isLoading || isFetching) && <Loader />}
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      <SearchBlock>
        <Subtitle>Получить данные</Subtitle>
        <Label>
          <InputSearch placeholder="Строка поиска" onChange={addSearchValue} />
        </Label>
      </SearchBlock>
      <DataBlock>
        <SearchQueryChart mainData={chartData} />
        <SearchQueryDataGrid data={gridData} />
      </DataBlock>
    </>
  );
};
