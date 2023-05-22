import { useEffect, useState } from 'react';
import { THead } from './THead/THead';
import { StyledTable } from './Table.styled';
import { createArray, subtractDate } from 'utils';
import { TBody } from './TBody/TBody';
import { IWbReportsResponse } from 'services/types';
import { TextInfo } from '../Sales.styled';

interface TableProps {
  data: IWbReportsResponse | undefined;
}

export const Table = ({ data }: TableProps) => {
  const [headData, setHeadData] = useState<string[]>([]);

  useEffect(() => {
    if (!data?.data.length) return;

    setHeadData(
      createArray(data.data[0].parameters.length).map((_, index) => subtractDate(data.date, index))
    );
  }, [data]);

  if (!data) return <TextInfo>Нет данных для отображения</TextInfo>;

  return (
    <StyledTable count={headData.length}>
      <THead data={headData} />
      <TBody data={data.data} total={data.total} />
    </StyledTable>
  );
};
