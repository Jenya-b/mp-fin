import { useGetWbApiSalesReportsQuery } from 'services';
import { Loader } from 'modules/components/Loader/Loader';
import { Table } from '../Table/Table';
import { SalesChart } from '../Chart/Chart';

export const Orders = () => {
  const { data: response, isLoading } = useGetWbApiSalesReportsQuery(null);

  return (
    <>
      {isLoading && <Loader />}
      <Table response={response} interval={7} />
      <SalesChart response={response} />
    </>
  );
};

export default Orders;
