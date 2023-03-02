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
import { OneWbQueriesType } from 'services/types';

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

interface SearchQueryChartProps {
  mainData: OneWbQueriesType[];
}

export const SearchQueryChart = ({ mainData }: SearchQueryChartProps) => {
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

  const labels = mainData.map(({ date }) => date);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: mainData.map(({ count }) => Number(count)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Chart type="line" options={options} data={data} />
    </div>
  );
};
