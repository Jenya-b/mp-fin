import { Main, MainTitle } from 'styles/components';
import { Table } from './Table/Table';
import { useGetWbApiReportsQuery } from 'services';

export const Sales = () => {
  const { data } = useGetWbApiReportsQuery(null);
  return (
    <Main style={{ overflow: 'hidden' }}>
      <MainTitle>Заказы и продажи</MainTitle>
      <Table data={data} />
    </Main>
  );
};

export default Sales;
