import { FormControl, NativeSelect } from '@mui/material';
import { setLocalStorage } from 'utils';
import { Filter, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  setCountChart: React.Dispatch<React.SetStateAction<number>>;
  countChart: number;
}

export const FilterChartCount = ({ setCountChart, countChart }: FilterWeekProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCountChart(Number(value));
    setLocalStorage('countChart', Number(value));
  };

  return (
    <Filter>
      <Subtitle>Количество графиков:</Subtitle>
      <FormControl fullWidth>
        <NativeSelect defaultValue={countChart} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={4}>4</option>
        </NativeSelect>
      </FormControl>
    </Filter>
  );
};
