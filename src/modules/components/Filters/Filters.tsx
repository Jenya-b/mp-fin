import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { IFiltersData } from 'services/types';
import { Filters, Title } from './Filter.styled';
import { FilterArticles } from './FilterArticles';
import { FilterSelectParam } from './FilterSelectParam';
import { FilterWeeks } from './FilterWeeks';

interface FiltersBlockProps {
  setCountChart: Dispatch<SetStateAction<number>>;
  countChart: number;
  countChartParam: number[];
  weekIdFilter: string[];
  filtersData: IFiltersData | undefined;
  setWeekIdFilter: (event: ChangeEvent<HTMLInputElement>) => void;
  articleNameFilter: string[];
  setArticleNameFilter: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FiltersBlock = ({
  setCountChart,
  countChart,
  countChartParam,
  weekIdFilter,
  filtersData,
  setWeekIdFilter,
  articleNameFilter,
  setArticleNameFilter,
}: FiltersBlockProps) => {
  return (
    <Filters>
      <Title>Фильтр</Title>
      <FilterSelectParam
        setParameter={setCountChart}
        thisParameter={countChart}
        parameters={countChartParam}
        title="Количество графиков:"
        nameLocalStorage="countChart"
        isFullWidth={true}
      />
      <FilterWeeks
        arrWeeks={weekIdFilter}
        allWeeks={filtersData ? filtersData.weeksList : []}
        setWeekIdFilter={setWeekIdFilter}
      />
      <FilterArticles
        arrArticles={articleNameFilter}
        allArticles={filtersData ? filtersData.articles : []}
        setArticleNameFilter={setArticleNameFilter}
      />
    </Filters>
  );
};
