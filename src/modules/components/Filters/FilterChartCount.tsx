import { FormControl, NativeSelect } from '@mui/material';
import { setLocalStorage } from 'utils';
import { Filter, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  setParameter: React.Dispatch<React.SetStateAction<number>>;
  thisParameter: number;
  parameters: number[];
  title: string;
  nameLocalStorage?: string;
}

export const FilterChartCount = ({
  setParameter,
  thisParameter,
  parameters,
  title,
  nameLocalStorage,
}: FilterWeekProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setParameter(Number(value));
    if (nameLocalStorage) {
      setLocalStorage(nameLocalStorage, Number(value));
    }
  };

  return (
    <Filter>
      <Subtitle>{title}</Subtitle>
      <FormControl fullWidth>
        <NativeSelect defaultValue={thisParameter} onChange={handleChange}>
          {parameters.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Filter>
  );
};
