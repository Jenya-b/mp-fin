interface THeadProps {
  data: string[];
}

export const THead = ({ data }: THeadProps) => {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Запрос</th>
        {data.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};
