import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IWbQueries } from 'services/types';

interface SearchQueryDataGridProps {
  data: IWbQueries[];
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
    {
      field: 'date',
      headerName: 'Дата',
    },
  ];

  return (
    <div style={{ paddingTop: '34px' }}>
      <DataGrid
        columns={analiticColumns}
        rows={data}
        getRowId={(row) => row.title}
        rowHeight={30}
      />
    </div>
  );
};
