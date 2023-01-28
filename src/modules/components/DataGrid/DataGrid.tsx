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
import { getLocalStorage, setLocalStorage, getMaxValueInObject, getSumValuesInObject } from 'utils';
import { PercentBar } from '../PercentBar/PercentBar';
import { RenderHeader } from './RenderHeader';
import { analiticColumnWidth } from 'constants/dataGrid';

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
      width: analiticColumnWidth,
    },
    {
      field: 'ordersCount',
      width: analiticColumnWidth,
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
      width: analiticColumnWidth,
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
      width: analiticColumnWidth,
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
      field: 'salesSumWithDiscount',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'salesSumWithDiscount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'salesSumWithDiscount' });
        return <RenderHeader headerName="Продажи (со скидкой), руб" sum={param} />;
      },
    },
    {
      field: 'salesSumTransferToSeller',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'salesSumTransferToSeller' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'salesSumTransferToSeller' });
        return <RenderHeader headerName="Продажи (к перечислению продавцу), руб" sum={param} />;
      },
    },
    {
      field: 'refundsCount',
      width: analiticColumnWidth,
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
      field: 'refundsSumWithDiscount',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'refundsSumWithDiscount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'refundsSumWithDiscount' });
        return <RenderHeader headerName="Возвраты (со скидкой), руб" sum={param} />;
      },
    },
    {
      field: 'refundsSumTransferToSeller',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'refundsSumTransferToSeller' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'refundsSumTransferToSeller' });
        return <RenderHeader headerName="Возвраты (к перечислению продавцу), руб" sum={param} />;
      },
    },
    {
      field: 'redemtionPercent',
      headerName: 'Выкуп, %',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'redemtionPercent' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsOrdersCount',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsOrdersCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'logisticsOrdersCount' });
        return <RenderHeader headerName="Логистика заказы, кол-во" sum={param} />;
      },
    },
    {
      field: 'logisticsOrdersRub',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsOrdersRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'logisticsOrdersRub' });
        return <RenderHeader headerName="Логистика заказы, руб" sum={param} />;
      },
    },
    {
      field: 'logisticsRefundsCount',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsRefundsCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'logisticsRefundsCount' });
        return <RenderHeader headerName="Логистика возвраты, кол-во" sum={param} />;
      },
    },
    {
      field: 'logisticsRefundsRub',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsRefundsRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'logisticsRefundsRub' });
        return <RenderHeader headerName="Логистика возвраты, руб" sum={param} />;
      },
    },
    {
      field: 'logisticsGeneral',
      headerName: 'Логистика общая',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsGeneral' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsFraction',
      headerName: 'Логистика на ед',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsFraction' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'transferToSallerCount',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'transferToSallerCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'transferToSallerCount' });
        return <RenderHeader headerName="К перечислению продавцу, кол-во" sum={param} />;
      },
    },
    {
      field: 'transferToSallerRub',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'transferToSallerRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'transferToSallerRub' });
        return <RenderHeader headerName="К перечислению продавцу, руб" sum={param} />;
      },
    },
    {
      field: 'onBankAccountRub',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'onBankAccountRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'onBankAccountRub' });
        return <RenderHeader headerName="На счёту, руб" sum={param} />;
      },
    },
    {
      field: 'comissionWbRub',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'comissionWbRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'comissionWbRub' });
        return <RenderHeader headerName="Комиссия ВБ, руб" sum={param} />;
      },
    },
    {
      field: 'comissionWbPercents',
      headerName: 'Комиссия ВБ, %',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'comissionWbPercents' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'costPriceCount',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'costPriceCount' });
        return <RenderHeader headerName="Себестоимость, кол-во" sum={param} />;
      },
    },
    {
      field: 'costPriceRub',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
      renderHeader: () => {
        const param = getSumValuesInObject({ data, parameter: 'costPriceRub' });
        return <RenderHeader headerName="Себестоимость, руб" sum={param} />;
      },
    },
    {
      field: 'costPriceFraction',
      headerName: 'Себестоимость, на ед',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceFraction' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'profitRub',
      headerName: 'Прибыль, руб',
      width: analiticColumnWidth,
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
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'profitFraction' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'profitability',
      headerName: 'Рентабильность',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'profitability' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'margin',
      headerName: 'Маржа, %',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'margin' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'retailPriceIncludingAgreedDiscount',
      headerName: 'Ср. цена розничная (с учетом согласованной скидки)',
      description: 'Ср. цена розничная (с учетом согласованной скидки)',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({
          data,
          parameter: 'retailPriceIncludingAgreedDiscount',
        });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'wbSoldProduct',
      headerName: 'Средняя Вайлдберриз реализовал Товар (Пр)',
      description: 'Средняя Вайлдберриз реализовал Товар (Пр)',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'wbSoldProduct' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'transferToSallerForTheSoldGoods',
      headerName: 'Средняя к перечислению продавцу, руб',
      description: 'Средняя к перечислению продавцу, руб',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({
          data,
          parameter: 'transferToSallerForTheSoldGoods',
        });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionOrders',
      headerName: 'Доля в заказах',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionOrders' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionSales',
      headerName: 'Доля в продажах',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionSales' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionProfit',
      headerName: 'Доля в прибыли',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionProfit' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionOnBankAccount',
      headerName: 'Доля на счет',
      width: analiticColumnWidth,
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionOnBankAccount' });
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
