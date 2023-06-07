import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { IWbReportsResponse } from 'services/types';
import { createArray, subtractDateWithoutYear } from 'utils';
import { Wrapper } from './Chart.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface SalesChartProps {
  response: IWbReportsResponse | undefined;
}

export const SalesChart = ({ response }: SalesChartProps) => {
  const [labels, setLabel] = useState<string[]>([]);
  const [mainDate, setMainDate] = useState<number[]>([]);
  const [selectOptions, setSelectOptions] = useState<string[]>([]);
  const [article, setArticle] = useState('');

  useEffect(() => {
    if (!response) return;

    setLabel(
      createArray(response.data[0].parameters.length).map((_, index) =>
        subtractDateWithoutYear(response.date, index)
      )
    );
    setSelectOptions(response.data.map(({ itemcodewb }) => itemcodewb));
  }, [response]);

  useEffect(() => {
    if (!response) return;

    if (article) {
      const obj = response.data.find(({ itemcodewb }) => itemcodewb === article);
      if (obj) setMainDate(obj.parameters);
    } else {
      setMainDate(response.total);
    }
  }, [response, article]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: true,
      },
      datalabels: {
        display: true,
        align: 'end' as const,
        color: 'black',

        formatter: function (value: number) {
          if (value === 0) return '';
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: mainDate,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const handleChange = (event: SelectChangeEvent) => {
    setArticle(event.target.value as string);
  };

  if (!response) return <></>;

  return (
    <Wrapper>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Артикулы ВБ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={article}
          label="Артикулы ВБ"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Общие данные</em>
          </MenuItem>
          {selectOptions.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Chart style={{ maxHeight: '550px' }} type="line" options={options} data={data} />
    </Wrapper>
  );
};
