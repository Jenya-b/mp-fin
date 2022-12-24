export interface IParameterNames {
  parameter:
    | 'ordersCount'
    | 'ordersSum'
    | 'salesCount'
    | 'salesSum'
    | 'refundsCount'
    | 'refundsSum'
    | 'redemtionPercent'
    | 'logistics'
    | 'onBankAccount'
    | 'comissionRubs'
    | 'comissionPercents'
    | 'costPriceSum'
    | 'profitRub'
    | 'profitFraction'
    | 'averageSetPrice'
    | 'averagePurchasePrice'
    | 'margin'
    | 'wbExpenses'
    | 'ndsAwardWB'
    | 'poverennyyServices';
}

export interface IDataSets extends IParameterNames {
  label: string;
  backgroundColor: string;
  borderColor: string;
}
