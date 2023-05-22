import { IWbData } from 'services/types';

interface TBodyProps {
  data: IWbData[];
  total: number[];
}

export const TBody = ({ data, total }: TBodyProps) => (
  <tbody>
    {data.map(({ itemcodeseller, itemcodewb, parameters, product }) => (
      <tr key={itemcodeseller}>
        <td>{itemcodewb}</td>
        <td>{product}</td>
        <td>{itemcodeseller}</td>
        {parameters.map((item, i) => (
          <td key={i}>{item}</td>
        ))}
      </tr>
    ))}
    <tr>
      <td></td>
      <td></td>
      <td>Итого:</td>
      {total.map((item, i) => (
        <td key={i}>{item}</td>
      ))}
    </tr>
  </tbody>
);
