import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { IFiltersData } from 'services/types';
import { Filters, Title } from './Filters.styled';
import { FilterByArticles } from './FilterByArticles/FilterByArticles';
import { FilterBySelectParams } from './FilterBySelectParams/FilterBySelectParams';
import { FilterByWeeks } from './FilterByWeeks/FilterByWeeks';
import { getListOfYears } from 'utils';

interface FiltersBlockProps {
  setCountChart: Dispatch<SetStateAction<number>>;
  countChart: number;
  countChartParam: number[];
  weekIdFilter: string[];
  filtersData: IFiltersData | undefined;
  setWeekIdFilter: (event: ChangeEvent<HTMLInputElement>) => void;
  articleNameFilter: string[];
  setArticleNameFilter: (event: ChangeEvent<HTMLInputElement>) => void;
  analiticYear: number;
  setAnaliticYear: Dispatch<SetStateAction<number>>;
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
  analiticYear,
  setAnaliticYear,
}: FiltersBlockProps) => {
  return (
    <Filters>
      <Title>Фильтр</Title>
      <FilterBySelectParams
        setParameter={setCountChart}
        thisParameter={countChart}
        parameters={countChartParam}
        title="Количество графиков:"
        nameLocalStorage="countChart"
        isFullWidth={true}
      />
      <FilterBySelectParams
        setParameter={setAnaliticYear}
        thisParameter={analiticYear}
        parameters={getListOfYears()}
        title="Выберите год:"
        nameLocalStorage="analiticYear"
        isFullWidth={true}
      />
      <FilterByWeeks
        arrWeeks={weekIdFilter}
        allWeeks={filtersData ? filtersData.weeksList : []}
        setWeekIdFilter={setWeekIdFilter}
        analiticYear={analiticYear}
      />
      <FilterByArticles
        arrArticles={articleNameFilter}
        allArticles={filtersData ? filtersData.articles : []}
        setArticleNameFilter={setArticleNameFilter}
      />
    </Filters>
  );
};
