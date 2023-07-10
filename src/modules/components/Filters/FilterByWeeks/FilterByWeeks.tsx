import { IWeekWithParam } from 'services/types';
import { formatDateGeneral } from 'utils';
import { Filter, Label, List, Subtitle, Input } from '../Filters.styled';
import { useEffect, useState } from 'react';

interface FilterWeekProps {
  arrWeeks: string[];
  allWeeks: IWeekWithParam[];
  setWeekIdFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  analiticYear: number;
}

export const FilterByWeeks = ({
  arrWeeks,
  allWeeks,
  setWeekIdFilter,
  analiticYear,
}: FilterWeekProps) => {
  const [weeksState, setWeeksState] = useState<IWeekWithParam[]>([]);

  useEffect(() => {
    setWeeksState(
      allWeeks.filter(({ weekStart }) => new Date(weekStart).getFullYear() === analiticYear)
    );
  }, [allWeeks, analiticYear]);

  return (
    <Filter>
      <Subtitle>Недели:</Subtitle>
      <List>
        {weeksState.map(({ id, weekNumber, weekStart, weekEnd }) => (
          <li key={id}>
            <Label htmlFor={id}>
              <Input
                id={id}
                type="checkbox"
                checked={arrWeeks.includes(id)}
                onChange={setWeekIdFilter}
              />{' '}
              {''}
              {`${weekNumber} (${formatDateGeneral(weekStart)} - ${formatDateGeneral(weekEnd)})`}
            </Label>
          </li>
        ))}
      </List>
    </Filter>
  );
};
