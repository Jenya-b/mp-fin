import { FormEvent, useEffect, useState } from 'react';
import { useDebounce } from 'hooks/debounce';
import { SearchBlock, Subtitle, Label, InputSearch, DataBlock } from './SearchQuery.styled';
import { useGetWbQueriesQuery } from 'services';
import { SearchQueryChart } from './Chart';
import { IWbQueries } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { SearchQueryDataGrid } from './DataGrid';
import { sortDate } from 'utils/formatDate';
import { Main, MainTitle } from 'styles/components';

export const SearchQuery = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [chartData, setChartData] = useState<IWbQueries[]>([]);
  const debouncedSearch = useDebounce(searchValue, 600);

  const { isLoading, isFetching, data, refetch } = useGetWbQueriesQuery(debouncedSearch);

  useEffect(() => {
    if (!!debouncedSearch) {
      setChartData([]);
      return;
    }
    refetch();
  }, [debouncedSearch]);

  useEffect(() => {
    if (data && !data.length) setChartData([]);
    if (data && data.length) {
      const dataFilter = data.filter((item) => item.title === searchValue);
      const dataSort = dataFilter.sort((dateA, dateB) =>
        sortDate(dateA.date, dateB.date) ? 1 : -1
      );
      setChartData(dataSort);
    }
  }, [data]);

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  return (
    <Main>
      {(isLoading || isFetching) && <Loader />}
      <MainTitle>Аналитика</MainTitle>
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
    </Main>
  );
};

export default SearchQuery;
