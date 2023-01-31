import { useEffect, useState } from 'react';
import { Main, MainTitle } from 'styles/components';
import { useFilter } from 'hooks';
import { useLazyGetFiltersDataQuery, usePostAnalyticsMutation } from 'services';
import { Filters, Wrapper, Title, Diagram, Table } from './Analytics.styled';
import { SmartTable } from 'modules/components/DataGrid/DataGrid';
import { Loader } from 'modules/components/Loader/Loader';
import { FilterWeeks } from 'modules/components/Filters/FilterWeeks';
import { FilterArticles } from 'modules/components/Filters/FilterArticles';
import { BaseChart } from 'modules/components/Charts/Chart';
import { IAnalyticVisualData } from 'services/types';
import { FilterChartCount } from 'modules/components/Filters/FilterChartCount';
import { createArray, getLocalStorage } from 'utils';
import { InformationBlock } from 'modules/components/InformationBlock/InformationBlock';

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
  const [countChart, setCountChart] = useState(getLocalStorage('countChart') ?? 1);

  useEffect(() => {
    if (allWeekId.length && allArticleName.length) return;
    fetchFiltersData(null);
  }, [fetchFiltersData]);

  useEffect(() => {
    if (isSuccessFiltersData && filtersData) {
      const weekId = filtersData.weeksList.map(({ weekId }) => weekId);
      const articleName = filtersData.articles.map(({ articleName }) => articleName);
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
      <Wrapper style={{ marginTop: '40px' }}>
        <Filters>
          <Title>Фильтр</Title>
          {filtersData && (
            <>
              <FilterChartCount setCountChart={setCountChart} countChart={countChart} />
              <FilterWeeks
                arrWeeks={weekIdFilter}
                allWeeks={filtersData.weeksList}
                setWeekIdFilter={setWeekIdFilter}
              />
              <FilterArticles
                arrArticles={articleNameFilter}
                allArticles={filtersData.articles}
                setArticleNameFilter={setArticleNameFilter}
              />
            </>
          )}
        </Filters>
        {firstAliticsData && (
          <>
            <Diagram>
              {createArray(countChart).map((n, i) => (
                <BaseChart key={i} chartNum={i} mainData={firstAliticsData} />
              ))}
            </Diagram>
            <Table>{<SmartTable data={firstAliticsData.analyticsDatas ?? []} />}</Table>
          </>
        )}
      </Wrapper>
    </Main>
  );
};

export default AnaliticsPage;
