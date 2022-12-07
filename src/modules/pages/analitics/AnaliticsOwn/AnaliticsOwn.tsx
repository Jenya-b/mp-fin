import { useGetAnaliticOwnDataQuery } from 'services';

export const AnaliticsOwn = () => {
  const { data, isSuccess } = useGetAnaliticOwnDataQuery(null);

  return <>AnaliticsOwn</>;
};
