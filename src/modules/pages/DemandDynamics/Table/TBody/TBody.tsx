interface TBodyProps {
  data: {
    id: number;
    name: string;
    typeId: number | null;
    parameters: number[];
  }[];
}

export const TBody = ({ data }: TBodyProps) => (
  <tbody>
    {data.map(({ id, name, parameters, typeId }) => (
      <tr key={id}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{name}</td>
        {parameters.map((item, i) => (
          <td key={i}>{item}</td>
        ))}
      </tr>
    ))}
  </tbody>
);
