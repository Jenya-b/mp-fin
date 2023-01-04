import { IWeekWithParam } from 'services/types';
import { formatDateGeneral } from 'utils/formatDate';
import { Filter, Input, Item, Label, List, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  arrWeeks: string[];
  allWeeks: IWeekWithParam[];
  setWeekIdFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterWeeks = ({ arrWeeks, allWeeks, setWeekIdFilter }: FilterWeekProps) => (
  <Filter>
    <Subtitle>Недели:</Subtitle>
    <List>
      {allWeeks.map(({ weekId, weekNumber, weekStart, weekEnd }) => (
        <Item key={weekId}>
          <Label htmlFor={weekId}>
            <Input
              id={weekId}
              type="checkbox"
              checked={arrWeeks.includes(weekId)}
              onChange={setWeekIdFilter}
            />{' '}
            {''}
            {`${weekNumber} (${formatDateGeneral(weekStart)} - ${formatDateGeneral(weekEnd)})`}
          </Label>
        </Item>
      ))}
    </List>
  </Filter>
);
