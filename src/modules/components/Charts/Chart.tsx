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
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { chartParameter } from 'constants/charts';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { IAnalyticVisualData } from 'services/types';
import { SelectChangeEvent } from '@mui/material';
import { IDataSets } from 'interfaces/analitics';
import { getLocalStorage, setLocalStorage, isObject } from 'utils';
import { Controls } from './Controls/Controls';
import { ButtonEnterFull, ButtonExitFull, ButtonWrapp } from './Chart.styled';

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

interface BaseChartProps {
  mainData: IAnalyticVisualData;
  chartNum: number;
}

export const BaseChart = ({ mainData, chartNum }: BaseChartProps) => {
  const localChartFormat = getLocalStorage(`chartFormat${chartNum}`);
  const localChartType = getLocalStorage(`chartType${chartNum}`);
  const [chartFormat, setChartFormat] = useState(
    isObject(localChartFormat) ? 'article' : localChartFormat
  );
  const [chartType, setChartType] = useState<'line' | 'bar'>(
    isObject(localChartType) ? 'line' : localChartType
  );
  const [selectValues, setSelectValues] = useState<IDataSets[]>(
    getLocalStorage(`defaultAutoSelect${chartNum}`) &&
      getLocalStorage(`defaultAutoSelect${chartNum}`).length
      ? [...getLocalStorage(`defaultAutoSelect${chartNum}`)]
      : [chartParameter[2], chartParameter[4]]
  );
  const handle = useFullScreenHandle();

  const options = {
    responsive: true,
    plugins: {
      legend: {
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

  const labelsWeek = mainData.weekAndSums.map(({ weekNumber }) => weekNumber);
  const labelsArticle = mainData.analyticsDatas.map(({ article }) => article);

  const dataWeek = {
    labels: labelsWeek,
    datasets: selectValues.map(({ label, parameter, backgroundColor, borderColor }) => ({
      label,
      data: labelsWeek.map((week) =>
        Number(
          mainData.weekAndSums[mainData.weekAndSums.findIndex((item) => item.weekNumber === week)][
            parameter
          ].toFixed(2)
        )
      ),
      borderColor,
      backgroundColor,
    })),
  };

  const dataArticle = {
    labels: labelsArticle,
    datasets: selectValues.map(({ label, parameter, backgroundColor, borderColor }) => ({
      label,
      data: labelsArticle.map((label) =>
        Number(
          mainData.analyticsDatas[
            mainData.analyticsDatas.findIndex((item) => item.article === label)
          ][parameter].toFixed(2)
        )
      ),
      borderColor,
      backgroundColor,
    })),
  };

  useEffect(() => {
    if (!selectValues.length) return;

    setLocalStorage(`defaultAutoSelect${chartNum}`, selectValues);
  }, [selectValues]);

  useEffect(() => {
    setLocalStorage(`chartFormat${chartNum}`, chartFormat);
  }, [chartFormat]);

  useEffect(() => {
    setLocalStorage(`chartType${chartNum}`, chartType);
  }, [chartType]);

  const handleChangeFormat = (event: SelectChangeEvent<string>) => {
    setChartFormat(event.target.value);
  };

  const handleChangeType = (event: SelectChangeEvent<string>) => {
    setChartType(event.target.value as 'line' | 'bar');
  };

  return (
    <div style={{ position: 'relative' }}>
      <Controls
        chartFormat={chartFormat}
        chartType={chartType}
        handleChangeFormat={handleChangeFormat}
        handleChangeType={handleChangeType}
        chartParameter={chartParameter}
        setSelectValues={setSelectValues}
        selectValues={selectValues}
      />
      <FullScreen handle={handle}>
        <Chart
          type={chartType}
          options={options}
          data={chartFormat === 'week' ? dataWeek : dataArticle}
        />
        <ButtonWrapp isActive={handle.active}>
          <ButtonEnterFull isActive={handle.active} onClick={handle.enter}>
            Полноэкранный режим
          </ButtonEnterFull>
          <ButtonExitFull isActive={handle.active} onClick={handle.exit}>
            Выйти
          </ButtonExitFull>
        </ButtonWrapp>
      </FullScreen>
    </div>
  );
};
