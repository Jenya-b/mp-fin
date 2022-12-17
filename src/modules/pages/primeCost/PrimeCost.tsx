import { ChangeEvent, useEffect, useState } from 'react';
import { primeCostColumnNames } from 'constants/tables';
import { useDebounce } from 'hooks/debounce';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { Main, MainTitle, PrimaryInput } from 'styles/components';
import { useChangeArticleMutation, useGetArticlesQuery } from 'services';
import { IArticle } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { BasicTable } from 'modules/components/Table/Table';
import { StyledTableCell } from 'modules/components/Table/TableCell';
import { Notification } from 'modules/components/Notification/Notification';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/alert';
import { TableColumns } from 'modules/components/Table/TableColumns/TableColumns';

let delayTimer: ReturnType<typeof setTimeout>;

export const PrimeCostPage = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearch = useDebounce(searchValue);

  const {
    data: articleList,
    refetch,
    isLoading: isLoadingGetData,
    isFetching,
  } = useGetArticlesQuery(debouncedSearch);

  const [
    setArticle,
    { isSuccess: isSuccessChangeArticle, isLoading: isLoadingSetData, isError: isErrorSetData },
  ] = useChangeArticleMutation();

  const { isOpenNotify, notifyMessage } = useAppSelector((state) => state.notifyReducer);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isSuccessChangeArticle) {
      refetch();
      dispatch(openNotify(alertMessage.successSetArticle));
    }
  }, [isSuccessChangeArticle]);

  useEffect(() => {
    if (isErrorSetData) {
      dispatch(openNotify(alertMessage.errorSetArticle));
    }
  }, [isErrorSetData]);

  const renderRow = (item: IArticle) => (
    <>
      <StyledTableCell>{item.itemCode}</StyledTableCell>
      <StyledTableCell>{item.articleName}</StyledTableCell>
      <StyledTableCell>
        <PrimaryInput
          defaultValue={item.costPrice}
          onChange={(event) => onChangeArticle(event, item.articleId)}
        />
      </StyledTableCell>
    </>
  );

  const renderColumnNames = () => <TableColumns columnNames={primeCostColumnNames} />;

  const onChangeArticle = (event: ChangeEvent<HTMLInputElement>, articlesId: string) => {
    const { value } = event.target;

    if (!value.length) return;
    event.target.value = value;
    const costPrices = Number(value);

    (() => {
      clearTimeout(delayTimer);
      delayTimer = setTimeout(function () {
        setArticle([
          {
            costPrices,
            articlesId,
          },
        ]);
      }, 1000);
    })();
  };

  const addSearchValue = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  return (
    <Main>
      {(isLoadingSetData || isLoadingGetData || isFetching) && <Loader />}
      <Notification notifyMessage={notifyMessage} isOpenNotify={isOpenNotify} />
      <MainTitle>Себестоимость</MainTitle>
      <BasicTable
        isSearch={true}
        handleChange={addSearchValue}
        renderRow={renderRow}
        renderColumnNames={renderColumnNames}
        data={articleList}
      />
    </Main>
  );
};

export default PrimeCostPage;
