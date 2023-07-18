import { useEffect, useState } from 'react';
import { THead } from './THead/THead';
import { StyledTable } from './Table.styled';
import { createArray, subtractDateWithoutYear } from 'utils';
import { TBody } from './TBody/TBody';
import { IWbReportsResponse } from 'services/types';
import { TextInfo } from '../Orders.styled';

interface TableProps {
  response: IWbReportsResponse | undefined;
}

export const Table = ({ response }: TableProps) => {
  const [headData, setHeadData] = useState<string[]>([]);

  useEffect(() => {
    if (!response?.data.length) return;

    setHeadData(
      createArray(response.data[0].parameters.length).map((_, index) =>
        subtractDateWithoutYear(response.date, index)
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
