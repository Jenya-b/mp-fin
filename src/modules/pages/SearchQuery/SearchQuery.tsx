import { Main, MainTitle, SecondaryButton } from 'styles/components';
import { useState, useEffect, ChangeEvent } from 'react';
import {
  useAddSavedArticleMutation,
  useGetAllSavedArticleQuery,
  useGetArticlesQuery,
  useLazyGetArticleQueriesQuery,
} from 'services';
import { formatDateGeneral } from 'utils';
import { Label, SearchBlock, Subtitle, TablesBlock } from './SearchQuery.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { IArticleQueries } from 'services/types';
import { getDefaultValueByInputDate } from 'utils/formatDate/formatDate';
import { InputSearch } from 'modules/pages/DemandDynamics/DemandDynamics.styled';
import { GridTable } from './GridTable/GridTable';
import { MultipleSelect } from './MultipleSelect/MultipleSelect';

export const SearchQuery = () => {
  const [date, setDate] = useState<string>(getDefaultValueByInputDate(new Date()));
  const [gridData, setGridData] = useState<IArticleQueries[]>([]);
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [allArticle, setAllArticle] = useState<string[]>([]);
  const [nameQuery, setNameQuery] = useState<string>('');
  const { data: queryAllArticle } = useGetArticlesQuery('');
  const {} = useGetAllSavedArticleQuery(null);
  const [getArticleQueries, { data: queryData, isLoading, isFetching }] =
    useLazyGetArticleQueriesQuery();
  const [fetchSavedArticle] = useAddSavedArticleMutation();

  useEffect(() => {
    if (!date) return;
    getArticleQueries(date);
  }, [date]);

  useEffect(() => {
    if (!queryData) return;
    if (!selectValue.length) {
      setGridData(queryData);
    } else {
      setGridData(queryData.filter(({ article }) => selectValue.includes(article)));
    }
  }, [selectValue, queryData]);

  useEffect(() => {
    if (!queryData) return;
    setGridData(queryData);
  }, [queryData]);

  const updateData = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(formatDateGeneral(value, true));
  };

  const savedArticle = () => {
    if (!(nameQuery && allArticle.length)) return;
    fetchSavedArticle({ article: allArticle[0], query: nameQuery });
  };

  return (
    <Main style={{ overflow: 'hidden' }}>
      {(isLoading || isFetching) && <Loader />}
      <MainTitle>Поисковые запросы</MainTitle>
      <SearchBlock>
        <Subtitle>Добавить данные по артикулу</Subtitle>
        <Label>
          <MultipleSelect
            isMultiple={false}
            placeholder="Артикул"
            data={queryAllArticle?.map(({ articleName }) => articleName) ?? []}
            selectValue={allArticle}
            setSelectValue={setAllArticle}
          />
        </Label>
        <Label>
          <InputSearch
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Артикул"
          />
        </Label>
        <SecondaryButton style={{ width: '300px' }} onClick={savedArticle}>
          Добавить
        </SecondaryButton>
      </SearchBlock>
      <SearchBlock>
        <Subtitle>Получить данные</Subtitle>
        <Label>
          <InputSearch type="date" onChange={updateData} defaultValue={date} />
        </Label>
        <Label>
          <MultipleSelect
            isMultiple={true}
            placeholder="Артикул"
            data={queryData?.map(({ article }) => article) ?? []}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
        </Label>
      </SearchBlock>
      <TablesBlock>
        {gridData.map((item) => (
          <GridTable key={item.article} numDate={7} {...item} />
        ))}
      </TablesBlock>
    </Main>
  );
};

export default SearchQuery;
