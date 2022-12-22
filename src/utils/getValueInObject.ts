import { IAnaliticArticle } from 'services/types';

interface getMaxValueInObjectProps {
  data: IAnaliticArticle[];
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

export const getMaxValueInObject = ({ data, parameter }: getMaxValueInObjectProps) => {
  return Math.max.apply(
    null,
    data.map((item) => item[parameter])
  );
};

export const getSumValuesInObject = ({ data, parameter }: getMaxValueInObjectProps) => {
  return data.reduce((sum, current) => sum + current[parameter], 0);
};
