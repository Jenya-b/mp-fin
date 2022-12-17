import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { PercentBar } from 'modules/components/PercentBar/PercentBar';

export const analiticColumns: GridColDef[] = [
  {
    field: 'article',
    headerName: 'Артикул',
    hideable: false,
  },
  { field: 'ordersCount', headerName: 'Заказы, кол-во' },
  { field: 'ordersSum', headerName: 'Заказы, сумма' },
  { field: 'salesCount', headerName: 'Продажи, кол-во' },
  { field: 'salesSum', headerName: 'Продажи, сумма' },
  { field: 'refundsCount', headerName: 'Возвраты, кол-во' },
  { field: 'refundsSum', headerName: 'Возвраты, сумма' },
  { field: 'redemtionPercent', headerName: 'Выкуп, %' },
  { field: 'logistics', headerName: 'Логистика' },
  { field: 'onBankAccount', headerName: 'На счёту, руб' },
  { field: 'comissionRubs', headerName: 'Комиссия, руб' },
  {
    field: 'comissionPercents',
    headerName: 'Комиссия, %',
    renderCell: (params: GridRenderCellParams) => <PercentBar percent={Math.round(params.value)} />,
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
