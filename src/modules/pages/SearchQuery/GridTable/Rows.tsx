import { cities } from 'constants/cities';
import { IParam, IStatistics } from 'interfaces/searchQuery';
import { Parameters, RowName, RowWrapp, List, Item } from './GridTable.styled';

export const Rows = ({ statistics, title }: IParam) => {
  const renderRow = (item: IStatistics, i: number) => (
    <List key={i}>
      {cities.map((city) => (
        <Item key={city}>{item[city]}</Item>
      ))}
    </List>
  );

  return (
    <RowWrapp>
      <RowName>{title}</RowName>
      <Parameters>{statistics.map((item, i) => renderRow(item, i))}</Parameters>
    </RowWrapp>
  );
};
