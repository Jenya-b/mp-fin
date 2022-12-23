import { useEffect, useState } from 'react';
import { useFilter } from 'hooks/useFilter';
import { useGetOwnDataQuery, useGetOwnAnaliticMutation } from 'services';
import { Filters, Wrapper, Title, ButtonFilter, Diagram, Table } from './AnaliticsOwn.styled';
import { SmartTable } from 'modules/components/DataGrid/DataGrid';
import { Loader } from 'modules/components/Loader/Loader';
import { FilterWeeks } from 'modules/components/Filters/FilterWeeks';
import { FilterArticles } from 'modules/components/Filters/FilterArticles';
import { OwnDataTabs } from 'modules/components/Tabs/Tabs';

export const AnaliticsOwn = () => {
  const { data: getOwnData, isSuccess, isLoading: isLoadingGetOwnData } = useGetOwnDataQuery(null);
  const [fetchOwnData, { isLoading: isLoadingFetchOwn, data: ownData }] =
    useGetOwnAnaliticMutation();
  const [allWeekId, setAllWeekId] = useState<string[]>([]);
  const [allArticleName, setAllArticleName] = useState<string[]>([]);
  const [weekIdFilter, setWeekIdFilter] = useFilter();
  const [articleNameFilter, setArticleNameFilter] = useFilter();

  useEffect(() => {
    if (isSuccess && getOwnData) {
      const weekId = getOwnData.weeksList.map(({ weekId }) => weekId);
      const articleName = getOwnData.articles.map(({ articleName }) => articleName);
      setAllWeekId(weekId);
      setAllArticleName(articleName);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (allWeekId.length && allArticleName.length) {
      updateData();
    }
  }, [allWeekId, allArticleName]);

  const updateData = () => {
    fetchOwnData({
      weekIds: !weekIdFilter.length ? allWeekId : weekIdFilter,
      articleNames: !articleNameFilter.length ? allArticleName : articleNameFilter,
    });
  };

  return (
    <>
      {(isLoadingGetOwnData || isLoadingFetchOwn) && <Loader />}
      <Wrapper style={{ marginTop: '40px' }}>
        <Filters>
          <Title>Фильтр</Title>
          {getOwnData && (
            <>
              <FilterWeeks weeks={getOwnData.weeksList} setWeekIdFilter={setWeekIdFilter} />
              <FilterArticles
                articles={getOwnData.articles}
                setArticleNameFilter={setArticleNameFilter}
              />
            </>
          )}
          <ButtonFilter onClick={updateData}>Обновить</ButtonFilter>
        </Filters>
        <Diagram>{ownData && <OwnDataTabs ownData={ownData} />}</Diagram>
        <Table>{ownData && <SmartTable data={ownData.analyticsDatas ?? []} />}</Table>
      </Wrapper>
    </>
  );
};
