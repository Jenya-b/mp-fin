import { useEffect } from 'react';
import { v4 } from 'uuid';
import { primeCostColumnNames } from '../../../constants/table';
import { Main, MainTitle, PrimaryInput } from '../../../styles/components';
import { useChangeArticleMutation, useGetArticlesQuery } from '../../../utils/api/productApi';
import { IArticle } from '../../../utils/api/types';
import { BasicTable } from '../../components/table/Table';
import { StyledTableCell, StyledTableCellColl } from '../../components/table/TableCell';

export const PrimeCostPage = () => {
  const { data: articleList, refetch } = useGetArticlesQuery(null);
  const [setArticle, { isSuccess: isSuccessChangeArticle }] = useChangeArticleMutation();

  useEffect(() => {
    if (isSuccessChangeArticle) {
      refetch();
    }
  }, [isSuccessChangeArticle]);

  const renderRow = (item: IArticle) => (
    <>
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
      setArticle([
        {
          costPrices,
          articlesId,
        },
      ]);
    }
  };

  return (
    <Main>
      <MainTitle>Себестоимсть</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={articleList} />
    </Main>
  );
};
