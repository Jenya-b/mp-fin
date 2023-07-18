interface THeadProps {
  data: string[];
}

export const THead = ({ data }: THeadProps) => {
  return (
    <thead>
      <tr>
        <th>Артикул ВБ</th>
        <th>Товар</th>
        <th>Артикул продавца</th>
        {data.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};
