export interface IParameterNames {
  parameter:
    | 'comissionWbPercents'
    | 'comissionWbRub'
    | 'costPriceCount'
    | 'costPriceFraction'
    | 'costPriceRub'
    | 'fractionOnBankAccount'
    | 'fractionOrders'
    | 'fractionProfit'
    | 'fractionSales'
    | 'logisticsFraction'
    | 'logisticsGeneral'
    | 'logisticsOrdersCount'
    | 'logisticsOrdersRub'
    | 'logisticsRefundsCount'
    | 'logisticsRefundsRub'
    | 'margin'
    | 'onBankAccountRub'
    | 'ordersCount'
    | 'ordersSum'
    | 'profitFraction'
    | 'profitRub'
    | 'profitability'
    | 'redemtionPercent'
    | 'refundsCount'
    | 'refundsSumTransferToSeller'
    | 'refundsSumWithDiscount'
    | 'retailPriceIncludingAgreedDiscount'
    | 'salesCount'
    | 'salesSumTransferToSeller'
    | 'salesSumWithDiscount'
    | 'transferToSallerCount'
    | 'transferToSallerForTheSoldGoods'
    | 'transferToSallerRub'
    | 'wbSoldProduct';
}

export interface IDataSets extends IParameterNames {
  label: string;
  backgroundColor: string;
  borderColor: string;
}
