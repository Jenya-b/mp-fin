import { FormControl, NativeSelect } from '@mui/material';
import { setLocalStorage } from 'utils';
import { Filter, Subtitle } from '../Filters.styled';

interface FilterSelectParamProps {
  setParameter: React.Dispatch<React.SetStateAction<number>>;
  thisParameter: number;
  parameters: number[];
  title: string;
  isFullWidth: boolean;
  nameLocalStorage?: string;
}

export const FilterSelectParam = ({
  setParameter,
  thisParameter,
  parameters,
  title,
  nameLocalStorage,
  isFullWidth,
}: FilterSelectParamProps) => {
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
      <FormControl fullWidth={isFullWidth}>
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
