import { IParameterNames } from 'interfaces/analitics';
import { IAnalyticArticle } from 'services/types';

interface IProps extends IParameterNames {
  data: IAnalyticArticle[];
}

export const getMaxValueInObject = ({ data, parameter }: IProps) => {
  return Math.max.apply(
    null,
    data.map((item) => item[parameter])
  );
};

export const getSumValuesInObject = ({ data, parameter }: IProps) => {
  return data.reduce((sum, current) => sum + current[parameter], 0);
};
