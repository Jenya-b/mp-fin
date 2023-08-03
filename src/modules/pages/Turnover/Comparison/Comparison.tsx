import { Loader } from 'modules/components/Loader/Loader';
import { useGetWeeklyAnalyticReportsQuery } from 'services';
import { Table } from './Table/Table';

export const Comparison = () => {
  const { data: response, isLoading } = useGetWeeklyAnalyticReportsQuery(null);
  return (
    <>
      {isLoading && <Loader />}
      <Table response={response} interval={7} />
    </>
  );
};

export default Comparison;
