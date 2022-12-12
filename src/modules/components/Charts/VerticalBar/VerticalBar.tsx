import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { IAnaliticArticle } from 'services/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props<T> {
  mainData: IAnaliticArticle[];
}

export const VerticalBarChart = <T,>({ mainData = [] }: Props<T>) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Продажи/возвраты по артикулам',
      },
    },
  };

  const labels = mainData.map(({ article }) => article);

  const data = {
    labels,
    datasets: [
      {
        label: 'Продажи, кол-во',
        data: labels.map(
          (label) => mainData[mainData.findIndex((item) => item.article === label)].salesCount
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Возвраты, кол-во',
        data: labels.map(
          (label) => mainData[mainData.findIndex((item) => item.article === label)].refundsCount
        ),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
