import { TableRow } from '../Row/Row';
import { Params } from '../Table.styled';

interface THeadProps {
  data: string[];
  cities: string[];
}

export const THead = ({ data, cities }: THeadProps) => {
  const renderItem = (name: string) => (
    <th key={name}>
      <div>{name}</div>
      <Params>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </Params>
    </th>
  );

  return (
    <thead>
      <tr>
        <th style={{ textAlign: 'center' }}>Наименование</th>
        <TableRow row={data} renderEmpty={<></>} renderItem={renderItem} />
      </tr>
    </thead>
  );
};
