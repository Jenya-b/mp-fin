import { IDataSets } from 'interfaces/analitics';

export const chartParameter: IDataSets[] = [
  {
    label: 'Заказы, кол-во',
    parameter: 'ordersCount',
    borderColor: 'rgba(253, 217, 181, 1)',
    backgroundColor: 'rgba(253, 217, 181, 1)',
  },
  {
    label: 'Заказы, сумма',
    parameter: 'ordersSum',
    borderColor: 'rgba(255, 179, 0, 1)',
    backgroundColor: 'rgba(255, 179, 0, 1)',
  },
  {
    label: 'Продажи, кол-во',
    parameter: 'salesCount',
    borderColor: 'rgba(143, 80, 157, 1)',
    backgroundColor: 'rgba(143, 80, 157, 1)',
  },
  {
    label: 'Продажи (со скидкой), руб',
    parameter: 'salesSumWithDiscount',
    borderColor: 'rgba(0, 131, 110, 1)',
    backgroundColor: 'rgba(0, 131, 110, 1)',
  },
  {
    label: 'Продажи (к перечислению продавцу), руб',
    parameter: 'salesSumTransferToSeller',
    borderColor: 'rgba(193, 0, 32, 1)',
    backgroundColor: 'rgba(193, 0, 32, 1)',
  },
  {
    label: 'Возвраты, кол-во',
    parameter: 'refundsCount',
    borderColor: 'rgba(0, 125, 52, 1)',
    backgroundColor: 'rgba(0, 125, 52, 1)',
  },
  {
    label: 'Возвраты (со скидкой), руб',
    parameter: 'refundsSumWithDiscount',
    borderColor: 'rgba(210, 105, 30, 1)',
    backgroundColor: 'rgba(210, 105, 30, 1)',
  },
  {
    label: 'Возвраты (к перечислению продавцу), руб',
    parameter: 'refundsSumTransferToSeller',
    borderColor: 'rgba(69, 50, 46, 1)',
    backgroundColor: 'rgba(69, 50, 46, 1)',
  },
  {
    label: 'Выкуп, %',
    parameter: 'redemtionPercent',
    borderColor: 'rgba(197, 75, 140, 1)',
    backgroundColor: 'rgba(197, 75, 140, 1)',
  },
  {
    label: 'Логистика заказы, кол-во',
    parameter: 'logisticsOrdersCount',
    borderColor: 'rgba(237, 72, 48, 1)',
    backgroundColor: 'rgba(237, 72, 48, 1)',
  },
  {
    label: 'Логистика заказы, руб',
    parameter: 'logisticsOrdersRub',
    borderColor: 'rgba(160, 128, 64, 1)',
    backgroundColor: 'rgba(160, 128, 64, 1)',
  },
  {
    label: 'Логистика возвраты, кол-во',
    parameter: 'logisticsRefundsCount',
    borderColor: 'rgba(255, 43, 43, 1)',
    backgroundColor: 'rgba(255, 43, 43, 1)',
  },
  {
    label: 'Логистика возвраты, руб',
    parameter: 'logisticsRefundsRub',
    borderColor: 'rgba(100, 149, 237, 1)',
    backgroundColor: 'rgba(100, 149, 237, 1)',
  },
  {
    label: 'Логистика общая',
    parameter: 'logisticsGeneral',
    borderColor: 'rgba(52, 62, 64, 1)',
    backgroundColor: 'rgba(52, 62, 64, 1)',
  },
  {
    label: 'Логистика на ед',
    parameter: 'logisticsFraction',
    borderColor: 'rgba(0, 204, 204, 1)',
    backgroundColor: 'rgba(0, 204, 204, 1)',
  },
  {
    label: 'К перечислению продавцу, кол-во',
    parameter: 'transferToSallerCount',
    borderColor: 'rgba(26, 71, 128, 1)',
    backgroundColor: 'rgba(26, 71, 128, 1)',
  },
  {
    label: 'К перечислению продавцу, руб',
    parameter: 'transferToSallerRub',
    borderColor: 'rgba(238, 230, 163, 1)',
    backgroundColor: 'rgba(238, 230, 163, 1)',
  },
  {
    label: 'На счёту, руб',
    parameter: 'onBankAccountRub',
    borderColor: 'rgba(29, 172, 214, 1)',
    backgroundColor: 'rgba(29, 172, 214, 1)',
  },
  {
    label: 'Комиссия ВБ, руб',
    parameter: 'comissionWbRub',
    borderColor: 'rgba(138, 102, 66, 1)',
    backgroundColor: 'rgba(138, 102, 66, 1)',
  },
  {
    label: 'Комиссия ВБ, %',
    parameter: 'comissionWbPercents',
    borderColor: 'rgba(77, 113, 152, 1)',
    backgroundColor: 'rgba(77, 113, 152, 1)',
  },
  {
    label: 'Себестоимость, кол-во',
    parameter: 'costPriceCount',
    borderColor: 'rgba(195, 100, 197, 1)',
    backgroundColor: 'rgba(195, 100, 197, 1)',
  },
  {
    label: 'Себестоимость, руб',
    parameter: 'costPriceRub',
    borderColor: 'rgba(204, 102, 102, 1)',
    backgroundColor: 'rgba(204, 102, 102, 1)',
  },
  {
    label: 'Себестоимость, на ед',
    parameter: 'costPriceFraction',
    borderColor: 'rgba(190, 245, 116, 1)',
    backgroundColor: 'rgba(190, 245, 116, 1)',
  },
  {
    label: 'Прибыль, руб',
    parameter: 'profitRub',
    borderColor: 'rgba(146, 110, 174, 1)',
    backgroundColor: 'rgba(146, 110, 174, 1)',
  },
  {
    label: 'Прибыль, на 1 ед.',
    parameter: 'profitFraction',
    borderColor: 'rgba(50, 74, 178, 1)',
    backgroundColor: 'rgba(50, 74, 178, 1)',
  },
  {
    label: 'Рентабильность',
    parameter: 'profitability',
    borderColor: 'rgba(181, 84, 137, 1)',
    backgroundColor: 'rgba(181, 84, 137, 1)',
  },
  {
    label: 'Маржа, %',
    parameter: 'margin',
    borderColor: 'rgba(84, 57, 100, 1)',
    backgroundColor: 'rgba(84, 57, 100, 1)',
  },
  {
    label: 'Ср. цена розничная (с учетом согласованной скидки)',
    parameter: 'retailPriceIncludingAgreedDiscount',
    borderColor: 'rgba(67, 75, 27, 1)',
    backgroundColor: 'rgba(67, 75, 27, 1)',
  },
  {
    label: 'Средняя Вайлдберриз реализовал Товар (Пр)',
    parameter: 'wbSoldProduct',
    borderColor: 'rgba(207, 155, 143, 1)',
    backgroundColor: 'rgba(207, 155, 143, 1)',
  },
  {
    label: 'Средняя к перечислению продавцу, руб',
    parameter: 'transferToSallerForTheSoldGoods',
    borderColor: 'rgba(140, 72, 82, 1)',
    backgroundColor: 'rgba(140, 72, 82, 1)',
  },
  {
    label: 'Доля в заказах',
    parameter: 'fractionOrders',
    borderColor: 'rgba(102, 158, 133, 1)',
    backgroundColor: 'rgba(102, 158, 133, 1)',
  },
  {
    label: 'Доля в продажах',
    parameter: 'fractionSales',
    borderColor: 'rgba(216, 75, 32, 1)',
    backgroundColor: 'rgba(216, 75, 32, 1)',
  },
  {
    label: 'Доля в прибыли',
    parameter: 'fractionProfit',
    borderColor: 'rgba(237, 145, 33, 1)',
    backgroundColor: 'rgba(237, 145, 33, 1)',
  },
  {
    label: 'Доля на счет',
    parameter: 'fractionOnBankAccount',
    borderColor: 'rgba(32, 21, 94, 1)',
    backgroundColor: 'rgba(32, 21, 94, 1)',
  },
];
