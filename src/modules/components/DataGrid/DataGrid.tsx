import { useState, useEffect } from 'react';
import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import { IAnaliticArticle } from 'services/types';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';
import { PercentBar } from '../PercentBar/PercentBar';
import { getMaxValueInObject } from 'utils/getMaxValueInObject';

interface SmartTableProps {
  data: IAnaliticArticle[];
}

export const SmartTable = ({ data }: SmartTableProps) => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>(
    getLocalStorage('tableColumns')
  );

  const analiticColumns: GridColDef[] = [
    {
      field: 'article',
      headerName: 'Артикул',
      hideable: false,
    },
    {
      field: 'ordersCount',
      headerName: 'Заказы, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: 'ordersSum',
      headerName: 'Заказы, сумма',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'ordersSum' });
        return <PercentBar value={Math.round(params.value)} maxValue={maxValue} />;
      },
    },
    { field: 'salesCount', headerName: 'Продажи, кол-во' },
    {
      field: 'salesSum',
      headerName: 'Продажи, сумма',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'salesSum' });
        return <PercentBar value={Math.round(params.value)} maxValue={maxValue} />;
      },
    },
    { field: 'refundsCount', headerName: 'Возвраты, кол-во' },
    {
      field: 'refundsSum',
      headerName: 'Возвраты, сумма',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'refundsSum' });
        return <PercentBar value={Math.round(params.value)} maxValue={maxValue} />;
      },
    },
    { field: 'redemtionPercent', headerName: 'Выкуп, %' },
    {
      field: 'logistics',
      headerName: 'Логистика',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logistics' });
        return <PercentBar value={Math.round(params.value)} maxValue={maxValue} />;
      },
    },
    { field: 'onBankAccount', headerName: 'На счёту, руб' },
    { field: 'comissionRubs', headerName: 'Комиссия, руб' },
    {
      field: 'comissionPercents',
      headerName: 'Комиссия, %',
    },
    { field: 'costPriceSum', headerName: 'Себестоимость, руб' },
    { field: 'profitRub', headerName: 'Прибыль, руб' },
    { field: 'profitFraction', headerName: 'Прибыль, на 1 ед.' },
    { field: 'averageSetPrice', headerName: 'Средняя установленная цена' },
    { field: 'averagePurchasePrice', headerName: 'Средняя цена покупки' },
    { field: 'margin', headerName: 'Маржа, %' },
    { field: 'wbExpenses', headerName: 'Расходы на ВБ, %' },
    { field: 'ndsAwardWB', headerName: 'НДС вознаграждение ВБ' },
    { field: 'poverennyyServices', headerName: 'Услуги поверенного' },
  ];

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
