import { IDataSets } from 'interfaces/analitics';

export const chartParameter: IDataSets[] = [
  {
    label: 'Заказы, кол-во',
    parameter: 'ordersCount',
    borderColor: 'rgba(255, 0, 0, 0.5)',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  {
    label: 'Заказы, сумма',
    parameter: 'ordersSum',
    borderColor: 'rgba(209, 15, 63, 0.5)',
    backgroundColor: 'rgba(209, 15, 63, 0.5)',
  },
  {
    label: 'Продажи, кол-во',
    parameter: 'salesCount',
    borderColor: 'rgba(209, 15, 144, 0.5)',
    backgroundColor: 'rgba(209, 15, 144, 0.5)',
  },
  {
    label: 'Продажи, сумма',
    parameter: 'salesSum',
    borderColor: 'rgba(183, 15, 209, 0.5)',
    backgroundColor: 'rgba(183, 15, 209, 0.5)',
  },
  {
    label: 'Возвраты, кол-во',
    parameter: 'refundsCount',
    borderColor: 'rgba(99, 15, 209, 0.5)',
    backgroundColor: 'rgba(99, 15, 209, 0.5)',
  },
  {
    label: 'Возвраты, сумма',
    parameter: 'refundsSum',
    borderColor: 'rgba(41, 15, 209, 0.5)',
    backgroundColor: 'rgba(41, 15, 209, 0.5)',
  },
  {
    label: 'Выкуп, %',
    parameter: 'redemtionPercent',
    borderColor: 'rgba(15, 86, 209, 0.5)',
    backgroundColor: 'rgba(15, 86, 209, 0.5)',
  },
  {
    label: 'Логистика',
    parameter: 'logistics',
    borderColor: 'rgba(15, 199, 209, 0.5)',
    backgroundColor: 'rgba(15, 199, 209, 0.5)',
  },
  {
    label: 'На счёту, руб',
    parameter: 'onBankAccount',
    borderColor: 'rgba(15, 209, 131, 0.5)',
    backgroundColor: 'rgba(15, 209, 131, 0.5)',
  },
  {
    label: 'Комиссия, руб',
    parameter: 'comissionRubs',
    borderColor: 'rgba(15, 209, 24, 0.5)',
    backgroundColor: 'rgba(15, 209, 24, 0.5)',
  },
  {
    label: 'Комиссия, %',
    parameter: 'comissionPercents',
    borderColor: 'rgba(131, 209, 15, 0.5)',
    backgroundColor: 'rgba(131, 209, 15, 0.5)',
  },
  {
    label: 'Себестоимость, руб',
    parameter: 'costPriceSum',
    borderColor: 'rgba(209, 196, 15, 0.5)',
    backgroundColor: 'rgba(209, 196, 15, 0.5)',
  },
  {
    label: 'Прибыль, руб',
    parameter: 'profitRub',
    borderColor: 'rgba(209, 115, 15, 0.5)',
    backgroundColor: 'rgba(209, 115, 15, 0.5)',
  },
  {
    label: 'Прибыль, на 1 ед.',
    parameter: 'profitFraction',
    borderColor: 'rgba(61, 41, 33, 0.5)',
    backgroundColor: 'rgba(61, 41, 33, 0.5)',
  },
  {
    label: 'Средняя установленная цена',
    parameter: 'averageSetPrice',
    borderColor: 'rgba(97, 92, 68, 0.5)',
    backgroundColor: 'rgba(97, 92, 68, 0.5)',
  },
  {
    label: 'Средняя цена покупки',
    parameter: 'averagePurchasePrice',
    borderColor: 'rgba(68, 97, 68, 0.5)',
    backgroundColor: 'rgba(68, 97, 68, 0.5)',
  },
  {
    label: 'Маржа, %',
    parameter: 'margin',
    borderColor: 'rgba(68, 95, 97, 0.5)',
    backgroundColor: 'rgba(68, 95, 97, 0.5)',
  },
  {
    label: 'Расходы на ВБ, %',
    parameter: 'wbExpenses',
    borderColor: 'rgba(68, 73, 97, 0.5)',
    backgroundColor: 'rgba(68, 73, 97, 0.5)',
  },
  {
    label: 'НДС вознаграждение ВБ',
    parameter: 'ndsAwardWB',
    borderColor: 'rgba(91, 68, 97, 0.5)',
    backgroundColor: 'rgba(91, 68, 97, 0.5)',
  },
  {
    label: 'Услуги поверенного',
    parameter: 'poverennyyServices',
    borderColor: 'rgba(156, 82, 120, 0.5)',
    backgroundColor: 'rgba(156, 82, 120, 0.5)',
  },
];
