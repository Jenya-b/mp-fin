import { useEffect, useState } from 'react';
import { THead } from './THead/THead';
import { StyledTable } from './Table.styled';
import { createArray, subtractDateWithoutYear } from 'utils';
import { TBody } from './TBody/TBody';
import { IAnalyticReports } from 'services/types';
import { TextInfo } from '../../Turnover.styled';

interface TableProps {
  response: IAnalyticReports | undefined;
  interval: number;
}

export const Table = ({ response, interval }: TableProps) => {
  const [headData, setHeadData] = useState<string[]>([]);

  useEffect(() => {
    if (!response?.data.length) return;

    setHeadData(
      createArray(response.data[0].parameters.length).map((_, index) =>
        subtractDateWithoutYear(response.date, index * interval)
      )
    );
  }, [response]);

  if (!response || (response && !response.data.length)) {
    return <TextInfo>Нет данных для отображения</TextInfo>;
  }

  return (
    <StyledTable count={headData.length}>
      <THead data={headData} />
      <TBody data={response.data} total={response.total} />
    </StyledTable>
  );
};
