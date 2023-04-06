import { Dispatch, SetStateAction } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const styles = {
  background: '#ffffff',
  color: '#4F4F4F',
  borderRadius: '10px',

  '&': {
    '&& fieldset': {
      borderColor: '#F2F2F2',
      transition: 'all 0.3s',
    },
  },
  '&:hover': {
    '&& fieldset': {
      border: '1px solid #1FC5C7',
    },
  },
  '.Mui-focused': {
    border: '1px solid #BDBDBD',
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface MultipleSelectProps {
  isMultiple: boolean;
  placeholder: string;
  data: string[];
  selectValue: string[];
  setSelectValue: Dispatch<SetStateAction<string[]>>;
}

export const MultipleSelect = ({
  data,
  selectValue,
  setSelectValue,
  isMultiple,
  placeholder,
}: MultipleSelectProps) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
    const {
      target: { value },
    } = event;
    setSelectValue(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl
      sx={{
        m: 0,
        width: 300,
      }}
    >
      <Select
        sx={styles}
        multiple={isMultiple}
        displayEmpty
        value={selectValue}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder}</em>;
          }

          return selected.join(', ');
        }}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {data.map((article, i) => (
          <MenuItem key={i} value={article} style={getStyles(article, selectValue, theme)}>
            {article}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
