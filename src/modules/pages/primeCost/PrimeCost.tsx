import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { primeCostColumnNames } from 'constants/tables';
import { useDebounce } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Main, MainTitle, SecondaryInput } from 'styles/components';
import { useChangeArticleMutation, useGetArticlesQuery } from 'services';
import { IArticle } from 'services/types';
import { Loader } from 'modules/components/Loader/Loader';
import { BasicTable } from 'modules/components/Table/Table';
import { StyledTableCell } from 'modules/components/Table/TableCell';
import { Notification } from 'modules/components/Notification/Notification';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/alert';
import { TableColumns } from 'modules/components/Table/TableColumns/TableColumns';
import { notifySelector } from 'store/selectors';

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

  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);

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
        <SecondaryInput
          defaultValue={item.costPrice}
          name={item.articleId}
          onChange={onChangeArticle}
        />
      </StyledTableCell>
    </>
  );

  const renderColumnNames = () => <TableColumns columnNames={primeCostColumnNames} />;

  const onChangeArticle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const articlesId = event.currentTarget.name;

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

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
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
