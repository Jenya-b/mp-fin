import { useFilter } from 'hooks/useFilter';
import { useEffect, useState } from 'react';
import { useGetOwnDataQuery, useGetOwnAnaliticMutation } from 'services';
import { formatDateGeneral } from 'utils/formatDate';
import {
  Filters,
  Filter,
  Input,
  Item,
  Label,
  List,
  Visualization,
  Wrapper,
  Title,
  Subtitle,
  ButtonFilter,
} from './AnaliticsOwn.styled';

export const AnaliticsOwn = () => {
  const { data: getOwnData, isSuccess } = useGetOwnDataQuery(null);
  const [fetchOwnData, { isSuccess: isSuccessFetch, data: ownData }] = useGetOwnAnaliticMutation();
  const [allWeekId, setAllWeekId] = useState<string[]>([]);
  const [allArticjeName, setAllArticleName] = useState<string[]>([]);
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
    if (!allWeekId.length || !allArticjeName.length) return;
    handleClick();
  }, [allWeekId, allArticjeName]);

  const handleClick = () => {
    fetchOwnData({
      weekIds: !weekIdFilter.length ? allWeekId : weekIdFilter,
      articleNames: !articleNameFilter.length ? allArticjeName : articleNameFilter,
    });
  };

  return (
    <>
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
        </Filters>
        <Visualization></Visualization>
      </Wrapper>
      <ButtonFilter onClick={handleClick}>Обновить</ButtonFilter>
    </>
  );
};
