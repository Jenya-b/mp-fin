import { useState, useEffect, ChangeEvent } from 'react';
import { Main, MainTitle } from 'styles/components';
import {
  useAddSavedArticleMutation,
  useDeleteSavedArticleMutation,
  useGetAllSavedArticleQuery,
  useGetArticlesQuery,
  useLazyGetArticleQueriesQuery,
} from 'services';
import { formatDateGeneral } from 'utils';
import { Button, Label, SearchBlock, Subtitle, TablesBlock } from './SearchQuery.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { IArticleQueries } from 'services/types';
import { getDefaultValueByInputDate } from 'utils/formatDate/formatDate';
import { InputSearch } from 'modules/pages/DemandDynamics/DemandDynamics.styled';
import { GridTable } from './GridTable/GridTable';
import { MultipleSelect } from './MultipleSelect/MultipleSelect';

export const SearchQuery = () => {
  const [date, setDate] = useState<string>(getDefaultValueByInputDate(new Date()));
  const [gridData, setGridData] = useState<IArticleQueries[]>([]);
  const [listSavedArticles, setListSavedArticles] = useState<string[]>([]);
  const [listAllArticles, setListAllArticles] = useState<string[]>([]);
  const [nameQuery, setNameQuery] = useState<string>('');
  const { data: queryAllArticle } = useGetArticlesQuery('');
  const { data: querySavedArticle, refetch } = useGetAllSavedArticleQuery(null);
  const [
    getArticleQueries,
    { data: queryData, isLoading: isLoadingGetArticle, isFetching: isFetchingGetArticle },
  ] = useLazyGetArticleQueriesQuery();
  const [
    fetchSavedArticle,
    { isLoading: isLoadingSavedArticle, isSuccess: isSuccessSavedArticle },
  ] = useAddSavedArticleMutation();
  const [
    fetchDeleteArticle,
    { isLoading: isLoadingDeleteArticle, isSuccess: isSuccessDeleteArticle },
  ] = useDeleteSavedArticleMutation();

  useEffect(() => {
    if (!date) return;
    getArticleQueries(date);
    refetch();
  }, [date, isSuccessSavedArticle, isSuccessDeleteArticle]);

  useEffect(() => {
    if (!queryData) return;
    if (!listSavedArticles.length) {
      setGridData(queryData);
    } else {
      setGridData(queryData.filter(({ article }) => listSavedArticles.includes(article)));
    }
  }, [listSavedArticles, queryData]);

  useEffect(() => {
    if (!queryData) return;
    setGridData(queryData);
  }, [queryData]);

  const updateData = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(formatDateGeneral(value, true));
  };

  const savedArticle = () => {
    if (!(nameQuery && listAllArticles.length)) return;
    fetchSavedArticle({ article: listAllArticles[0], query: nameQuery });
    setNameQuery('');
  };

  const deleteSavedArticle = (article: string, query: string) => {
    if (!querySavedArticle) return;
    const desiredObject = querySavedArticle.find(
      (item) => item.article === article && item.query === query
    );
    if (desiredObject) {
      const { id } = desiredObject;
      fetchDeleteArticle({ id });
    }
  };

  return (
    <Main style={{ overflow: 'hidden' }}>
      {(isLoadingGetArticle ||
        isFetchingGetArticle ||
        isLoadingSavedArticle ||
        isLoadingDeleteArticle) && <Loader />}
      <MainTitle>Поисковые запросы</MainTitle>
      <SearchBlock>
        <Subtitle>Добавить данные по артикулу</Subtitle>
        <Label>
          <MultipleSelect
            isMultiple={false}
            placeholder="Артикул"
            data={queryAllArticle?.map(({ articleName }) => articleName) ?? []}
            selectValue={listAllArticles}
            setSelectValue={setListAllArticles}
          />
        </Label>
        <Label>
          <InputSearch
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Название запроса"
          />
        </Label>
        <Button onClick={savedArticle}>Добавить</Button>
      </SearchBlock>
      <SearchBlock>
        <Subtitle>Получить данные</Subtitle>
        <Label>
          <InputSearch type="date" onChange={updateData} defaultValue={date} />
        </Label>
        <Label>
          <MultipleSelect
            isMultiple={true}
            placeholder="Артикулы"
            data={queryData?.map(({ article }) => article) ?? []}
            selectValue={listSavedArticles}
            setSelectValue={setListSavedArticles}
          />
        </Label>
      </SearchBlock>
      {gridData.length ? (
        <TablesBlock>
          {gridData.map((item) => (
            <GridTable
              key={item.article}
              numDate={7}
              deleteSavedArticle={deleteSavedArticle}
              {...item}
            />
          ))}
        </TablesBlock>
      ) : (
        <></>
      )}
    </Main>
  );
};

export default SearchQuery;
