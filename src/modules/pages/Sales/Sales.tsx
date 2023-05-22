import { Main, MainTitle } from 'styles/components';
import { Table } from './Table/Table';
import { useGetWbApiReportsQuery } from 'services';
import { Loader } from 'modules/components/Loader/Loader';

export const Sales = () => {
  const { data, isLoading } = useGetWbApiReportsQuery(null);

  return (
    <Main style={{ overflow: 'hidden' }}>
      {isLoading && <Loader />}
      <MainTitle>Заказы и продажи</MainTitle>
      <Table data={data} />
    </Main>
  );
};

export default Sales;
