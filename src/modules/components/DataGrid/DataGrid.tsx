import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { IAnaliticArticle } from 'services/types';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'article', headerName: 'Артикул' },
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
  { field: 'comissionPercents', headerName: 'Комиссия, %' },
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

interface SmartTableProps {
  data: IAnaliticArticle[];
}

export const SmartTable = ({ data }: SmartTableProps) => (
  <div style={{ height: '100%', width: '100%' }}>
    <DataGrid columns={columns} rows={data} getRowId={(row) => row.article} />
  </div>
);
