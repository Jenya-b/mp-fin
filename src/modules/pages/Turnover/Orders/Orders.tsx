import { useGetWbApiOrdersReportsQuery } from 'services';
import { Loader } from 'modules/components/Loader/Loader';
import { SalesChart } from '../Chart/Chart';
import { Table } from '../Table/Table';

export const Orders = () => {
  const { data: response, isLoading } = useGetWbApiOrdersReportsQuery(null);

  return (
    <>
      {isLoading && <Loader />}
      <Table response={response} interval={1} />
      <SalesChart response={response} />
    </>
  );
};

export default Orders;
