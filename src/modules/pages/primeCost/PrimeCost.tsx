import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { primeCostColumnNames } from '../../../constants/table';
import { useDebounce } from '../../../hooks/debounce';
import { Main, MainTitle, PrimaryInput } from '../../../styles/components';
import { useChangeArticleMutation, useGetArticlesQuery } from '../../../utils/api/productApi';
import { IArticle } from '../../../utils/api/types';
import { BasicDialog } from '../../components/dialog/Dialog';
import { Loader } from '../../components/loader/Loader';
import { BasicTable } from '../../components/table/Table';
import { StyledTableCell, StyledTableCellColl } from '../../components/table/TableCell';

export const PrimeCostPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const debounced = useDebounce(searchValue);
  const [isActiveDialog, setActiveDialog] = useState<boolean>(false);
  const [articlesId, setArticlesId] = useState<string>();
  const [costPrices, setCostPrices] = useState<number>();
  const {
    data: articleList,
    refetch,
    isLoading: isLoadingGetData,
    isFetching,
  } = useGetArticlesQuery(debounced, {});

  const [setArticle, { isSuccess: isSuccessChangeArticle, isLoading: isLoadingSetData }] =
    useChangeArticleMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isSuccessChangeArticle) {
      refetch();
    }
  }, [isSuccessChangeArticle]);

  const renderRow = (item: IArticle) => (
    <>
      <StyledTableCell>{item.itemCode}</StyledTableCell>
      <StyledTableCell>{item.articleName}</StyledTableCell>
      <StyledTableCell>
        <PrimaryInput
          defaultValue={item.costPrice}
          onKeyDown={(event) => onKeyPressHandler(event, item.articleId)}
        />
      </StyledTableCell>
    </>
  );

  const renderColumnNames = () => (
    <>
      {primeCostColumnNames.map((item) => (
        <StyledTableCellColl key={v4()}>{item.title}</StyledTableCellColl>
      ))}
    </>
  );

  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLElement>, articlesId: string) => {
    if (event.key === 'Enter') {
      const costPrices = Number((event.currentTarget as HTMLInputElement).value);
      setArticlesId(articlesId);
      setCostPrices(costPrices);
      setActiveDialog(true);
    }
  };

  const closeDialogWindow = () => {
    setActiveDialog(false);
  };

  const confirmAction = () => {
    setArticle([
      {
        costPrices,
        articlesId,
      },
    ]);
    closeDialogWindow();
  };

  const addSearchValue = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  return (
    <Main>
      {(isLoadingSetData || isLoadingGetData || isFetching) && <Loader />}
      <BasicDialog
        isActiveDialog={isActiveDialog}
        handleClose={closeDialogWindow}
        handleConfirm={confirmAction}
        desc="Вы действительно хотите внести изменения?"
      />
      <MainTitle>Себестоимсть</MainTitle>
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
