import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TopWbQueriesType } from 'services/types';
import { v4 } from 'uuid';

interface SearchQueryDataGridProps {
  data: TopWbQueriesType[];
}

export const SearchQueryDataGrid = ({ data }: SearchQueryDataGridProps) => {
  const analiticColumns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Название',
      hideable: false,
      width: 300,
    },
    {
      field: 'count',
      headerName: 'Количество',
      hideable: false,
    },
  ];

  return (
    <div style={{ paddingTop: '34px' }}>
      <DataGrid columns={analiticColumns} rows={data} getRowId={() => v4()} rowHeight={30} />
    </div>
  );
};
