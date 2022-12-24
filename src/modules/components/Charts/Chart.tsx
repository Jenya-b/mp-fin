import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartParameter } from 'constants/charts';
import { Chart } from 'react-chartjs-2';
import { IAnaliticVisualOwnData } from 'services/types';
import { SelectChangeEvent } from '@mui/material';
import { Controls } from './Controls';
import { IDataSets } from 'interfaces/analitics';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BaseChartProps {
  mainData: IAnaliticVisualOwnData;
}

export const BaseChart = ({ mainData }: BaseChartProps) => {
  const [chartFormat, setChartFormat] = useState('article');
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [selectValues, setSelectValues] = useState<IDataSets[]>(
    getLocalStorage('defaultAutoSelect') && getLocalStorage('defaultAutoSelect').length
      ? [...getLocalStorage('defaultAutoSelect')]
      : [chartParameter[2], chartParameter[4]]
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
  };

  const labelsWeek = mainData.weekAndSums.map(({ weekNumber }) => weekNumber);
  const labelsArticle = mainData.analyticsDatas.map(({ article }) => article);

  const dataWeek = {
    labels: labelsWeek,
    datasets: selectValues.map(({ label, parameter, backgroundColor, borderColor }) => ({
      label,
      data: labelsWeek.map(
        (week) =>
          mainData.weekAndSums[mainData.weekAndSums.findIndex((item) => item.weekNumber === week)][
            parameter
          ]
      ),
      borderColor,
      backgroundColor,
    })),
  };

  const dataArticle = {
    labels: labelsArticle,
    datasets: selectValues.map(({ label, parameter, backgroundColor, borderColor }) => ({
      label,
      data: labelsArticle.map(
        (label) =>
          mainData.analyticsDatas[
            mainData.analyticsDatas.findIndex((item) => item.article === label)
          ][parameter]
      ),
      borderColor,
      backgroundColor,
    })),
  };

  useEffect(() => {
    if (!selectValues.length) return;

    setLocalStorage('defaultAutoSelect', selectValues);
  }, [selectValues]);

  const handleChangeFormat = (event: SelectChangeEvent<string>) => {
    setChartFormat(event.target.value);
  };

  const handleChangeType = (event: SelectChangeEvent<string>) => {
    setChartType(event.target.value as 'line' | 'bar');
  };

  return (
    <>
      <Controls
        chartFormat={chartFormat}
        chartType={chartType}
        handleChangeFormat={handleChangeFormat}
        handleChangeType={handleChangeType}
        chartParameter={chartParameter}
        setSelectValues={setSelectValues}
        selectValues={selectValues}
      />
      <Chart
        type={chartType}
        options={options}
        data={chartFormat === 'week' ? dataWeek : dataArticle}
      />
    </>
  );
};
