import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IArticleQueries } from 'services/types';
import { v4 } from 'uuid';

interface SearchQueryDataGridProps {
  data: IArticleQueries[];
}

export const SearchQueryDataGrid = ({ data }: SearchQueryDataGridProps) => {
  const analiticColumns: GridColDef[] = [
    {
      field: 'article',
      headerName: 'Артикул',
      hideable: false,
      width: 200,
    },
    {
      field: 'allCount',
      headerName: 'Количество',
      hideable: false,
    },
  ];

  return (
    <div style={{ paddingTop: '34px', height: '500px' }}>
      <DataGrid columns={analiticColumns} rows={data} getRowId={() => v4()} rowHeight={30} />
    </div>
  );
};
