import { useState, useEffect } from 'react';
import { DataGrid, GridColumnVisibilityModel, GridToolbar } from '@mui/x-data-grid';
import { IAnaliticArticle } from 'services/types';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';
import { analiticColumns } from 'constants/dataGrid';

interface SmartTableProps {
  data: IAnaliticArticle[];
}

export const SmartTable = ({ data }: SmartTableProps) => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>(
    getLocalStorage('tableColumns')
  );

  useEffect(() => {
    if (!columnVisibilityModel) return;
    setLocalStorage('tableColumns', columnVisibilityModel);
  }, [columnVisibilityModel]);

  return (
    <DataGrid
      columns={analiticColumns}
      rows={data}
      getRowId={(row) => row.article}
      rowHeight={30}
      components={{ Toolbar: GridToolbar }}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
    />
  );
};
