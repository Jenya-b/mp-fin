import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IAnaliticWeek } from 'services/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props<T> {
  mainData: IAnaliticWeek[];
}

export const LineChart = <T,>({ mainData }: Props<T>) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Продажи/возвраты по неделям',
      },
    },
  };

  const labels = mainData.map(({ weekNumber }) => weekNumber);

  const data = {
    labels,
    datasets: [
      {
        label: 'Продажи, кол-во',
        data: labels.map(
          (week) => mainData[mainData.findIndex((item) => item.weekNumber === week)].salesCount
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Возвраты, кол-во',
        data: labels.map(
          (week) => mainData[mainData.findIndex((item) => item.weekNumber === week)].refundsCount
        ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
};
