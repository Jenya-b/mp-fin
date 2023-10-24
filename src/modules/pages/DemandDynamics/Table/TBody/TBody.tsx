import { ChangeEvent } from 'react';
import { addSelectedQDFData } from 'store/reducers/analitics';
import { useAppDispatch } from 'store/store';

interface TBodyProps {
  data: {
    name: string;
    typeId: number;
    parameters: number[];
  }[];
}

export const TBody = ({ data }: TBodyProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addSelectedQDFData(e.target.id));
  };

  return (
    <tbody>
      {data.map(({ name, parameters }) => (
        <tr key={name}>
          <td>
            <input type="checkbox" id={name} onChange={handleChange} />
          </td>
          <td>{name}</td>
          {parameters.map((item, i) => (
            <td key={i}>{item}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
