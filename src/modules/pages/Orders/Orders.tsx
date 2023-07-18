import { Main, MainTitle } from 'styles/components';
import { Table } from './Table/Table';
import { useGetWbApiReportsQuery } from 'services';
import { Loader } from 'modules/components/Loader/Loader';
import { SalesChart } from './Chart/Chart';

export const Orders = () => {
  const { data: response, isLoading } = useGetWbApiReportsQuery(null);

  return (
    <Main style={{ overflow: 'hidden' }}>
      {isLoading && <Loader />}
      <MainTitle>Заказы и продажи</MainTitle>
      <Table response={response} />
      <SalesChart response={response} />
    </Main>
  );
};

export default Orders;
