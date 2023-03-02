import { Main, MainTitle } from 'styles/components';
import { useState, useEffect, ChangeEvent } from 'react';
import { useLazyGetArticleQueriesQuery } from 'services';
import { formatDateGeneral } from 'utils';
import { Label, SearchBlock, Subtitle, TablesBlock } from './SearchQuery.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { IArticleQueries } from 'services/types';
import { getDefaultValueByInputDate } from 'utils/formatDate/formatDate';
import { InputSearch } from 'modules/pages/DemandDynamics/DemandDynamics.styled';
import { GridTable } from './GridTable/GridTable';
import { data } from './data';

export const SearchQuery = () => {
  const [date, setDate] = useState<string>(getDefaultValueByInputDate(new Date()));
  const [gridData, setGridData] = useState<IArticleQueries[]>([]);
  const [getArticleQueries, { data: queryData, isLoading, isFetching }] =
    useLazyGetArticleQueriesQuery();

  useEffect(() => {
    if (!date) return;
    getArticleQueries(date);
  }, [date]);

  useEffect(() => {
    if (!queryData) return;
    setGridData(queryData);
  }, [queryData]);

  const updateData = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(formatDateGeneral(value, true));
  };

  return (
    <Main style={{ overflow: 'hidden' }}>
      {(isLoading || isFetching) && <Loader />}
      <MainTitle>Поисковые запросы</MainTitle>
      <SearchBlock>
        <Subtitle>Введите дату</Subtitle>
        <Label>
          <InputSearch type="date" onChange={updateData} defaultValue={date} />
        </Label>
      </SearchBlock>
      <TablesBlock>
        {data.map((item) => (
          <GridTable key={item.article} {...item} />
        ))}
      </TablesBlock>
    </Main>
  );
};

export default SearchQuery;
