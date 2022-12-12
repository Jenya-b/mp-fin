import { useEffect, useState, useCallback } from 'react';
import { useFilter } from 'hooks/useFilter';
import { useGetOwnDataQuery, useGetOwnAnaliticMutation } from 'services';
import { formatDateGeneral } from 'utils/formatDate';
import {
  Filters,
  Filter,
  Input,
  Item,
  Label,
  List,
  Wrapper,
  Title,
  Subtitle,
  ButtonFilter,
  Diagram,
  Table,
} from './AnaliticsOwn.styled';
import { SmartTable } from 'modules/components/DataGrid/DataGrid';
import { Loader } from 'modules/components/Loader/Loader';
import { VerticalBarChart } from 'modules/components/Charts/VerticalBar/VerticalBar';
import { LineChart } from 'modules/components/Charts/Line/Line';

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
      handleClick();
    }
  }, [allWeekId, allArticleName]);

  const handleClick = () => {
    fetchOwnData({
      weekIds: !weekIdFilter.length ? allWeekId : weekIdFilter,
      articleNames: !articleNameFilter.length ? allArticleName : articleNameFilter,
    });
  };

  return (
    <>
      {(isLoadingGetOwnData || isLoadingFetchOwn) && <Loader />}
      <Wrapper>
        <Filters>
          <Title>Фильтр</Title>
          <Filter>
            <Subtitle>Недели:</Subtitle>
            <List>
              {getOwnData?.weeksList.map(({ weekId, weekNumber, weekStart, weekEnd }) => (
                <Item key={weekId}>
                  <Label htmlFor={weekId}>
                    <Input id={weekId} type="checkbox" onChange={setWeekIdFilter} /> {''}
                    {`${weekNumber} (${formatDateGeneral(weekStart)} - ${formatDateGeneral(
                      weekEnd
                    )})`}
                  </Label>
                </Item>
              ))}
            </List>
          </Filter>
          <Filter>
            <Subtitle>Артикулы:</Subtitle>
            <List>
              {getOwnData?.articles.map(({ articleId, articleName }) => (
                <Item key={articleId}>
                  <Label htmlFor={articleName}>
                    <Input id={articleName} type="checkbox" onChange={setArticleNameFilter} /> {''}
                    {articleName}
                  </Label>
                </Item>
              ))}
            </List>
          </Filter>
          <ButtonFilter onClick={handleClick}>Обновить</ButtonFilter>
        </Filters>
        <Diagram>
          {ownData && <VerticalBarChart mainData={ownData.analyticsDatas} />}
          {ownData && <LineChart mainData={ownData.weekAndSums} />}
        </Diagram>
        <Table>
          <SmartTable data={ownData?.analyticsDatas ?? []} />
        </Table>
      </Wrapper>
    </>
  );
};
