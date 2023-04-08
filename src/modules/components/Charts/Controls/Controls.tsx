import { Dispatch, SetStateAction } from 'react';
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { IDataSets } from 'interfaces/analitics';
import { Wrapper } from './Controls.styled';

interface ControlsProps {
  chartFormat: string;
  handleChangeFormat: (event: SelectChangeEvent<string>) => void;
  chartType: string;
  handleChangeType: (event: SelectChangeEvent<string>) => void;
  chartParameter: IDataSets[];
  setSelectValues: Dispatch<SetStateAction<IDataSets[]>>;
  selectValues: IDataSets[];
}

export const Controls = ({
  chartFormat,
  handleChangeFormat,
  chartType,
  handleChangeType,
  chartParameter,
  setSelectValues,
  selectValues,
}: ControlsProps) => (
  <Wrapper>
    <FormControl variant="standard">
      <InputLabel>Порядок вывода</InputLabel>
      <Select value={chartFormat} onChange={handleChangeFormat}>
        <MenuItem value={'article'}>По артикулам</MenuItem>
        <MenuItem value={'week'}>По неделям</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="standard">
      <InputLabel>Тип графика</InputLabel>
      <Select value={chartType} onChange={handleChangeType}>
        <MenuItem value={'line'}>Линейный</MenuItem>
        <MenuItem value={'bar'}>Диаграмма</MenuItem>
      </Select>
    </FormControl>
    <Autocomplete
      style={{ gridRow: '1/3', gridColumn: '2/3' }}
      multiple
      value={[
        ...chartParameter.filter(({ label }) =>
          selectValues.find((item: { label: string }) => item.label === label)
        ),
      ]}
      options={chartParameter}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} variant="standard" label="Тип данных" />}
      onChange={(event, newValue) => {
        setSelectValues(newValue);
      }}
    />
  </Wrapper>
);
