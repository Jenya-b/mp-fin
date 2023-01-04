import { useEffect, useState } from 'react';
import { useFilter } from 'hooks/useFilter';
import { useLazyGetFiltersDataQuery, usePostAnaliticsMutation } from 'services';
import { Filters, Wrapper, Title, Diagram, Table } from './AnaliticsOwn.styled';
import { SmartTable } from 'modules/components/DataGrid/DataGrid';
import { Loader } from 'modules/components/Loader/Loader';
import { FilterWeeks } from 'modules/components/Filters/FilterWeeks';
import { FilterArticles } from 'modules/components/Filters/FilterArticles';
import { BaseChart } from 'modules/components/Charts/Chart';
import { IAnaliticVisualData } from 'services/types';

export const AnaliticsOwn = () => {
  const [
    fetchFiltersData,
    { data: filtersData, isSuccess: isSuccessFiltersData, isLoading: isLoadingFiltersData },
  ] = useLazyGetFiltersDataQuery();
  const [
    fetchAnaliticsData,
    { isSuccess: isSuccessAnaliticsData, isLoading: isLoadingAnaliticsData, data: analiticsData },
  ] = usePostAnaliticsMutation();
  const [isFiltersData, setIsFiltersData] = useState<boolean>(false);
  const [allWeekId, setAllWeekId] = useState<string[]>([]);
  const [allArticleName, setAllArticleName] = useState<string[]>([]);
  const [weekIdFilter, setWeekIdFilter] = useFilter();
  const [articleNameFilter, setArticleNameFilter] = useFilter();
  const [firstAliticsData, setFirstAliticsData] = useState<IAnaliticVisualData>();

  useEffect(() => {
    if (isFiltersData) return;
    fetchFiltersData(null);
  }, [fetchFiltersData, isFiltersData]);

  useEffect(() => {
    if (isSuccessFiltersData && filtersData) {
      const weekId = filtersData.weeksList.map(({ weekId }) => weekId);
      const articleName = filtersData.articles.map(({ articleName }) => articleName);
      setAllWeekId(weekId);
      setAllArticleName(articleName);
      setIsFiltersData(true);
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

  return (
    <>
      {(isLoadingFiltersData || isLoadingAnaliticsData) && <Loader />}
      <Wrapper style={{ marginTop: '40px' }}>
        <Filters>
          <Title>Фильтр</Title>
          {filtersData && (
            <>
              <FilterWeeks weeks={filtersData.weeksList} setWeekIdFilter={setWeekIdFilter} />
              <FilterArticles
                articles={filtersData.articles}
                setArticleNameFilter={setArticleNameFilter}
              />
            </>
          )}
        </Filters>
        {firstAliticsData && (
          <>
            <Diagram>{<BaseChart mainData={firstAliticsData} />}</Diagram>
            <Table>{<SmartTable data={firstAliticsData.analyticsDatas ?? []} />}</Table>
          </>
        )}
      </Wrapper>
    </>
  );
};
