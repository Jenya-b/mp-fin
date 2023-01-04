import { FormControl, NativeSelect } from '@mui/material';
import { IArticle } from 'services/types';
import { Filter, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  setCountChart: React.Dispatch<React.SetStateAction<number>>;
}

export const FilterChartCount = ({ setCountChart }: FilterWeekProps) => (
  <Filter>
    <Subtitle>Количество графиков:</Subtitle>
    <FormControl fullWidth>
      <NativeSelect
        // defaultValue={30}
        onChange={(e) => setCountChart(Number(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={4}>4</option>
      </NativeSelect>
    </FormControl>
  </Filter>
);
