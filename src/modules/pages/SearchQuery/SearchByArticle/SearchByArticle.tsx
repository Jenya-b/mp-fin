import { useState, useEffect, ChangeEvent } from 'react';
import { useLazyGetArticleQueriesQuery } from 'services';
import { formatDateGeneral } from 'utils';
import { InputSearch } from '../SearchByName/SearchByName.styled';
import { Label, SearchBlock, Subtitle } from '../SearchQuery.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { SearchQueryDataGrid } from './DataGrid';
import { IArticleQueries } from 'services/types';
import { getDefaultValueByInputDate } from 'utils/formatDate/formatDate';

export const SearchByArticle = () => {
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
    <>
      {(isLoading || isFetching) && <Loader />}
      <SearchBlock>
        <Subtitle>Введите дату</Subtitle>
        <Label>
          <InputSearch type="date" onChange={updateData} defaultValue={date} />
        </Label>
      </SearchBlock>
      <SearchQueryDataGrid data={gridData} />
    </>
  );
};
