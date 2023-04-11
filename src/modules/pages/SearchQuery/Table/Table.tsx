import { useEffect, useState } from 'react';
import { IArticleQueries } from 'services/types';
import { THead } from './THead/THead';
import { StyledTable } from './Table.styled';
import { createArray, subtractDate } from 'utils';
import { TBody } from './TBody/TBody';
import { cities } from 'constants/cities';

const countDays = 7;

interface TableProps {
  data: IArticleQueries[];
  deleteSavedArticle: (article: string, query: string) => void;
}

export const Table = ({ data, deleteSavedArticle }: TableProps) => {
  const [headData, setHeadData] = useState<string[]>([]);

  useEffect(() => {
    if (!data.length) return;

    setHeadData(createArray(countDays).map((_, index) => subtractDate(data[0].date, index)));
  }, [data]);

  if (!data.length) return null;

  return (
    <StyledTable count={countDays}>
      <THead data={headData} cities={cities} />
      {data.map(({ article, parameters }) => (
        <TBody
          key={article}
          article={article}
          data={parameters}
          cities={cities}
          deleteSavedArticle={deleteSavedArticle}
        />
      ))}
    </StyledTable>
  );
};
