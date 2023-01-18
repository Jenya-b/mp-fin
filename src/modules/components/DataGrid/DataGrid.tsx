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
      field: 'salesSumWithDiscount',
      headerName: 'Продажи (со скидкой), руб',
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
      headerName: 'Продажи (к перечислению продавцу), руб',
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
      field: 'refundsSumWithDiscount',
      headerName: 'Возвраты (со скидкой), руб',
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
      headerName: 'Возвраты (к перечислению продавцу), руб',
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
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'redemtionPercent' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsOrdersCount',
      headerName: 'Логистика заказы, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsOrdersCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsOrdersRub',
      headerName: 'Логистика заказы, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsOrdersRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsRefundsCount',
      headerName: 'Логистика возвраты, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsRefundsCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsRefundsRub',
      headerName: 'Логистика возвраты, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsRefundsRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsGeneral',
      headerName: 'Логистика общая',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsGeneral' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'logisticsFraction',
      headerName: 'Логистика на ед',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'logisticsFraction' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'transferToSallerCount',
      headerName: 'К перечислению продавцу, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'transferToSallerCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'transferToSallerRub',
      headerName: 'К перечислению продавцу, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'transferToSallerRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'onBankAccountRub',
      headerName: 'На счёту, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'onBankAccountRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'comissionWbRub',
      headerName: 'Комиссия ВБ, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'comissionWbRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'comissionWbPercents',
      headerName: 'Комиссия ВБ, %',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'comissionWbPercents' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'costPriceCount',
      headerName: 'Себестоимость, кол-во',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceCount' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'costPriceRub',
      headerName: 'Себестоимость, руб',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceRub' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'costPriceFraction',
      headerName: 'Себестоимость, на ед',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'costPriceFraction' });
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
      field: 'profitability',
      headerName: 'Рентабильность',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'profitability' });
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
      field: 'retailPriceIncludingAgreedDiscount',
      headerName: 'Ср. цена розничная (с учетом согласованной скидки)',
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
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'wbSoldProduct' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'transferToSallerForTheSoldGoods',
      headerName: 'Средняя к перечислению продавцу, руб',
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
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionOrders' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionSales',
      headerName: 'Доля в продажах',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionSales' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionProfit',
      headerName: 'Доля в прибыли',
      renderCell: (params: GridRenderCellParams) => {
        const maxValue = getMaxValueInObject({ data, parameter: 'fractionProfit' });
        return <PercentBar value={params.value} maxValue={maxValue} />;
      },
    },
    {
      field: 'fractionOnBankAccount',
      headerName: 'Доля на счет',
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
