import { useState, useEffect } from 'react';
import {
  DataGrid,
  GridColDef,
  GridColumnGroupingModel,
  GridColumnVisibilityModel,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import { IAnaliticArticle } from 'services/types';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';
import { PercentBar } from '../PercentBar/PercentBar';
import { getMaxValueInObject, getSumValuesInObject } from 'utils/getValueInObject';
import { RenderHeader } from './RenderHeader';

interface SmartTableProps {
  data: IAnaliticArticle[];
}

export const SmartTable = ({ data }: SmartTableProps) => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>(
    getLocalStorage('tableColumns')
  );

  const columnGroupingModel: GridColumnGroupingModel = [];

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
        const maxValue = getMaxValueInObject({ data, parameter: 'ordersCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'ordersCount' });
        return <RenderHeader headerName="Заказы, кол-во" sum={param} />;
      },
    },
    {
      field: 'ordersSum',
      headerName: 'Заказы, сумма',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'ordersSum' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'ordersSum' });
        return <RenderHeader headerName="Заказы, сумма" sum={param} />;
      },
    },
    {
      field: 'salesCount',
      headerName: 'Продажи, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'salesCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'salesCount' });
        return <RenderHeader headerName="Продажи, кол-во" sum={param} />;
      },
    },
    {
      field: 'salesSum',
      headerName: 'Продажи, сумма',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'salesSum' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'salesSum' });
        return <RenderHeader headerName="Продажи, сумма" sum={param} />;
      },
    },
    {
      field: 'refundsCount',
      headerName: 'Возвраты, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'refundsCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'refundsCount' });
        return <RenderHeader headerName="Возвраты, кол-во" sum={param} />;
      },
    },
    {
      field: 'refundsSum',
      headerName: 'Возвраты, сумма',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'refundsSum' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'refundsSum' });
        return <RenderHeader headerName="Возвраты, сумма" sum={param} />;
      },
    },
    {
      field: 'redemtionPercent',
      headerName: 'Выкуп, %',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'redemtionPercent' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logistics',
      headerName: 'Логистика',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logistics' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'onBankAccount',
      headerName: 'На счёту, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'onBankAccount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'comissionRubs',
      headerName: 'Комиссия, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'comissionRubs' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'comissionPercents',
      headerName: 'Комиссия, %',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'comissionPercents' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'costPriceSum',
      headerName: 'Себестоимость, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceSum' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'profitRub',
      headerName: 'Прибыль, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'profitRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'profitRub' });
        return <RenderHeader headerName="Прибыль, руб" sum={param} />;
      },
    },
    {
      field: 'profitFraction',
      headerName: 'Прибыль, на 1 ед.',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'profitFraction' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'averageSetPrice',
      headerName: 'Средняя установленная цена',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'averageSetPrice' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'averagePurchasePrice',
      headerName: 'Средняя цена покупки',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'averagePurchasePrice' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'margin',
      headerName: 'Маржа, %',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'margin' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'wbExpenses',
      headerName: 'Расходы на ВБ, %',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'wbExpenses' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'ndsAwardWB',
      headerName: 'НДС вознаграждение ВБ',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'ndsAwardWB' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'poverennyyServices',
      headerName: 'Услуги поверенного',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'poverennyyServices' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
  ];

  useEffect(() => {
    if (!columnVisibilityModel) return;
    setLocalStorage('tableColumns', columnVisibilityModel);
  }, [columnVisibilityModel]);

  return (
    <DataGrid
      columnGroupingModel={columnGroupingModel}
      columns={analiticColumns}
      rows={data}
      getRowId={(row) => row.article}
      rowHeight={30}
      components={{
        Toolbar: GridToolbar,
      }}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
      experimentalFeatures={{ columnGrouping: true }}
    />
  );
};
