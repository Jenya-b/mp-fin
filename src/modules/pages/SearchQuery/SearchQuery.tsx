import { useState, useEffect, ChangeEvent } from 'react';
import { Main, MainTitle } from 'styles/components';
import {
  useAddSavedArticleMutation,
  useDeleteSavedArticleMutation,
  useGetAllSavedArticleQuery,
  useGetArticlesQuery,
  useLazyGetArticleQueriesQuery,
  useUpdateDataMutation,
} from 'services';
import { formatDateGeneral, getDefaultValueByInputDate } from 'utils';
import { Button, Label, SearchBlock, Subtitle, InputSearch } from './SearchQuery.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { IArticleQueries } from 'services/types';
import { MultipleSelect } from './MultipleSelect/MultipleSelect';
import { Table } from './Table/Table';

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
  const [fetchUpdateData, { isLoading: isLoadingUpdateDate, isSuccess: isSuccessUpdateData }] =
    useUpdateDataMutation();

  useEffect(() => {
    if (!date) return;
    getArticleQueries(date);
    refetch();
  }, [date, isSuccessSavedArticle, isSuccessDeleteArticle, isSuccessUpdateData]);

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

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(formatDateGeneral(value, true));
  };

  const savedArticle = () => {
    if (!(nameQuery && listAllArticles.length)) return;
    fetchSavedArticle({ article: listAllArticles[0], query: nameQuery });
    setNameQuery('');
  };

  const deleteSavedArticle = (itemCode: string, query: string) => {
    if (!querySavedArticle) return;
    const desiredObject = querySavedArticle.find(
      (item) => item.itemCode === itemCode && item.query === query
    );
    if (desiredObject) {
      const { id } = desiredObject;
      fetchDeleteArticle({ id });
    }
  };

  const updateData = () => {
    fetchUpdateData();
  };

  return (
    <Main style={{ overflow: 'hidden' }}>
      {(isLoadingGetArticle ||
        isFetchingGetArticle ||
        isLoadingSavedArticle ||
        isLoadingDeleteArticle ||
        isLoadingUpdateDate) && <Loader />}
      <MainTitle>Поисковые запросы</MainTitle>
      <SearchBlock>
        <Subtitle>Добавить данные по артикулу</Subtitle>
        <Label>
          <MultipleSelect
            isMultiple={false}
            placeholder="Артикул"
            data={queryAllArticle?.map(({ itemCode }) => itemCode) ?? []}
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
          <InputSearch type="date" onChange={handleChangeDate} defaultValue={date} />
        </Label>
        <Label>
          <MultipleSelect
            isMultiple={true}
            placeholder="Артикулы"
            data={queryData ? queryData.map(({ article }) => article) : []}
            selectValue={listSavedArticles}
            setSelectValue={setListSavedArticles}
          />
        </Label>
        <Button onClick={updateData}>Обновить</Button>
      </SearchBlock>
      <Table data={gridData} deleteSavedArticle={deleteSavedArticle} />
    </Main>
  );
};

export default SearchQuery;
