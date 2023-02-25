import { getSumValuesInObject, getMaxValueInObject } from './getValueInObject';

const data = [
  {
    article: '01-02-AD',
    comissionWbPercents: 10,
    comissionWbRub: 11,
    costPriceCount: 12,
    costPriceFraction: 1,
    costPriceRub: 1,
    fractionOnBankAccount: 1,
    fractionOrders: 1,
    fractionProfit: 1,
    fractionSales: 1,
    logisticsFraction: 1,
    logisticsGeneral: 1,
    logisticsOrdersCount: 1,
    logisticsOrdersRub: 1,
    logisticsRefundsCount: 1,
    logisticsRefundsRub: 1,
    margin: 1,
    onBankAccountRub: 1,
    ordersCount: 1,
    ordersSum: 1,
    profitFraction: 1,
    profitRub: 1,
    profitability: 1,
    redemtionPercent: 1,
    refundsCount: 1,
    refundsSumTransferToSeller: 1,
    refundsSumWithDiscount: 1,
    retailPriceIncludingAgreedDiscount: 1,
    salesCount: 1,
    salesSumTransferToSeller: 1,
    salesSumWithDiscount: 1,
    transferToSallerCount: 1,
    transferToSallerForTheSoldGoods: 1,
    transferToSallerRub: 1,
    wbSoldProduct: 1,
  },
  {
    article: '02-02-AC',
    comissionWbPercents: 20,
    comissionWbRub: 21,
    costPriceCount: 22,
    costPriceFraction: 2,
    costPriceRub: 2,
    fractionOnBankAccount: 2,
    fractionOrders: 2,
    fractionProfit: 2,
    fractionSales: 2,
    logisticsFraction: 2,
    logisticsGeneral: 2,
    logisticsOrdersCount: 2,
    logisticsOrdersRub: 2,
    logisticsRefundsCount: 2,
    logisticsRefundsRub: 2,
    margin: 2,
    onBankAccountRub: 2,
    ordersCount: 2,
    ordersSum: 2,
    profitFraction: 2,
    profitRub: 2,
    profitability: 2,
    redemtionPercent: 2,
    refundsCount: 2,
    refundsSumTransferToSeller: 2,
    refundsSumWithDiscount: 2,
    retailPriceIncludingAgreedDiscount: 2,
    salesCount: 2,
    salesSumTransferToSeller: 2,
    salesSumWithDiscount: 2,
    transferToSallerCount: 2,
    transferToSallerForTheSoldGoods: 2,
    transferToSallerRub: 2,
    wbSoldProduct: 2,
  },
];

describe('Get value in object', () => {
  const parameter = 'comissionWbPercents';

  test('Get sum values', () => {
    expect(getSumValuesInObject({ data, parameter })).toBe(30);
  });
  test('Get max value', () => {
    expect(getMaxValueInObject({ data, parameter })).toBe(20);
  });
});
