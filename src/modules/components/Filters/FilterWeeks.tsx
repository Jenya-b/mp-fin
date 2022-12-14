import { IWeekWithParam } from 'services/types';
import { formatDateGeneral } from 'utils/formatDate';
import { Filter, Input, Item, Label, List, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  weeks: IWeekWithParam[];
  setWeekIdFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterWeeks = ({ weeks, setWeekIdFilter }: FilterWeekProps) => (
  <Filter>
    <Subtitle>Недели:</Subtitle>
    <List>
      {weeks.map(({ weekId, weekNumber, weekStart, weekEnd }) => (
        <Item key={weekId}>
          <Label htmlFor={weekId}>
            <Input id={weekId} type="checkbox" onChange={setWeekIdFilter} /> {''}
            {`${weekNumber} (${formatDateGeneral(weekStart)} - ${formatDateGeneral(weekEnd)})`}
          </Label>
        </Item>
      ))}
    </List>
  </Filter>
);
