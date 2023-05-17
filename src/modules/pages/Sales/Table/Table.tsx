import { useEffect, useState } from 'react';
import { IData } from '../data';
import { THead } from './THead/THead';
import { StyledTable } from './Table.styled';
import { createArray, subtractDate } from 'utils';
import { TBody } from './TBody/TBody';

interface TableProps {
  data: IData[];
}

export const Table = ({ data }: TableProps) => {
  const [headData, setHeadData] = useState<string[]>([]);

  useEffect(() => {
    if (!data.length) return;

    setHeadData(
      createArray(data[0].parameters.length).map((_, index) => subtractDate(data[0].date, index))
    );
  }, [data]);

  return (
    <StyledTable count={headData.length}>
      <THead data={headData} />
      <TBody data={data} />
    </StyledTable>
  );
};
