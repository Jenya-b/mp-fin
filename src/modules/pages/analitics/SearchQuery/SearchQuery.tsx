import { FormEvent, useEffect, useState } from 'react';
import { useDebounce } from 'hooks/debounce';
import { SearchBlock, Subtitle, Label, InputSearch, DataBlock } from './SearchQuery.styled';
import { useLazyGetWbQueriesQuery } from 'services';
import { SearchQueryChart } from './Chart';
import { IWbQueries } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { SearchQueryDataGrid } from './DataGrid';
import { sortDate } from 'utils/formatDate';

export const SearchQueryAnalytics = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [chartData, setChartData] = useState<IWbQueries[]>([]);
  const debouncedSearch = useDebounce(searchValue);

  const [fetchSearchQuery, { isSuccess, isLoading, isFetching, data }] = useLazyGetWbQueriesQuery();

  useEffect(() => {
    if (!debouncedSearch) return;
    fetchSearchQuery(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    if (isSuccess && data && data.length) {
      const dataFilter = data.filter((item) => item.title === searchValue);
      const dataSort = dataFilter.sort((dateA, dateB) =>
        sortDate(dateA.date, dateB.date) ? 1 : -1
      );
      setChartData(dataSort);
    }
  }, [isSuccess]);

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  return (
    <>
      {(isLoading || isFetching) && <Loader />}
      <SearchBlock>
        <Subtitle>Получить данные</Subtitle>
        <Label>
          <InputSearch placeholder="Строка поиска" onChange={addSearchValue} />
        </Label>
      </SearchBlock>
      <DataBlock>
        <SearchQueryChart mainData={chartData} />
        <SearchQueryDataGrid data={data ?? []} />
      </DataBlock>
    </>
  );
};
