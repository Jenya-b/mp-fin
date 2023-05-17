import { IData } from '../../data';

interface TBodyProps {
  data: IData[];
}

export const TBody = ({ data }: TBodyProps) => {
  return (
    <tbody>
      {data.map(({ articleSeler, articleWb, parameters, product }) => (
        <tr key={articleSeler}>
          <td>{articleWb}</td>
          <td>{product}</td>
          <td>{articleSeler}</td>
          {parameters.map((item, i) => (
            <td key={i}>{item}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
