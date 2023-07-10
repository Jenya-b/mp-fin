import { useEffect, useState } from 'react';
import { Main, MainTitle } from 'styles/components';
import { useFilter } from 'hooks';
import { useLazyGetFiltersDataQuery, usePostAnalyticsMutation } from 'services';
import { Wrapper, Diagram, Table } from './Analytics.styled';
import { SmartTable } from 'modules/pages/Analytics/DataGrid/DataGrid';
import { Loader } from 'modules/components/Loader/Loader';
import { BaseChart } from 'modules/components/Charts/Chart';
import { IAnalyticVisualData } from 'services/types';
import { createArray, getLocalStorage, getThisYear } from 'utils';
import { InformationBlock } from 'modules/components/InformationBlock/InformationBlock';
import { countChartParam } from 'constants/selectParam';
import { FiltersBlock } from 'modules/components/Filters/Filters';

export const AnaliticsPage = () => {
  const [
    fetchFiltersData,
    { data: filtersData, isSuccess: isSuccessFiltersData, isLoading: isLoadingFiltersData },
  ] = useLazyGetFiltersDataQuery();
  const [
    fetchAnaliticsData,
    { isSuccess: isSuccessAnaliticsData, isLoading: isLoadingAnaliticsData, data: analiticsData },
  ] = usePostAnalyticsMutation();
  const [allWeekId, setAllWeekId] = useState<string[]>([]);
  const [allArticleName, setAllArticleName] = useState<string[]>([]);
  const [weekIdFilter, setWeekIdFilter] = useFilter('weeksId');
  const [articleNameFilter, setArticleNameFilter] = useFilter('articlesId');
  const [firstAliticsData, setFirstAliticsData] = useState<IAnalyticVisualData>();
  const [countChart, setCountChart] = useState<number>(getLocalStorage('countChart') ?? 1);
  const [year, setYear] = useState<number>(getThisYear());

  useEffect(() => {
    if (allWeekId.length && allArticleName.length) return;
    fetchFiltersData(null);
  }, [fetchFiltersData]);

  useEffect(() => {
    if (isSuccessFiltersData && filtersData) {
      const weekId = filtersData.weeksList.map(({ id }) => id);
      const articleName = filtersData.articles.map(({ itemCode }) => itemCode);
      setAllWeekId(weekId);
      setAllArticleName(articleName);
    }
  }, [isSuccessFiltersData]);

  useEffect(() => {
    if (allWeekId.length && allArticleName.length) {
      updateData();
    }
  }, [allWeekId, allArticleName, weekIdFilter, articleNameFilter]);

  useEffect(() => {
    if (analiticsData) {
      setFirstAliticsData(analiticsData);
    }
  }, [isSuccessAnaliticsData]);

  const updateData = () => {
    fetchAnaliticsData({
      weekIds: !weekIdFilter.length ? allWeekId : weekIdFilter,
      articleNames: !articleNameFilter.length ? allArticleName : articleNameFilter,
    });
  };

  if (filtersData && !(filtersData.articles.length && filtersData.weeksList.length)) {
    return <InformationBlock />;
  }

  return (
    <Main>
      {(isLoadingFiltersData || isLoadingAnaliticsData) && <Loader />}
      <MainTitle>Аналитика</MainTitle>
      <Wrapper>
        <FiltersBlock
          setCountChart={setCountChart}
          countChart={countChart}
          countChartParam={countChartParam}
          weekIdFilter={weekIdFilter}
          filtersData={filtersData}
          setWeekIdFilter={setWeekIdFilter}
          articleNameFilter={articleNameFilter}
          setArticleNameFilter={setArticleNameFilter}
          analiticYear={year}
          setAnaliticYear={setYear}
        />
        {firstAliticsData && (
          <>
            <Diagram>
              {createArray(countChart).map((n, i) => (
                <BaseChart key={i} chartNum={i} mainData={firstAliticsData} />
              ))}
            </Diagram>
            <Table>
              <SmartTable data={firstAliticsData.analyticsDatas} />
            </Table>
          </>
        )}
      </Wrapper>
    </Main>
  );
};

export default AnaliticsPage;
