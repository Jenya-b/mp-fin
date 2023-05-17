import { Main, MainTitle } from 'styles/components';
import { Table } from './Table/Table';
import { data } from './data';

export const Sales = () => {
  return (
    <Main style={{ overflow: 'hidden' }}>
      <MainTitle>Заказы и продажи</MainTitle>
      <Table data={data} />
    </Main>
  );
};

export default Sales;
