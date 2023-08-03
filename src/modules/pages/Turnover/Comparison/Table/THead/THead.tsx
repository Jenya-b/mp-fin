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
          <th key={item}>
            <div className="th-date">{item}</div>
            <div className="th-params">
              <span>Продажи, к-во</span>
              <span>Продажи, %</span>
              <span>Продажи, руб.</span>
              <span>Заказы, к-во</span>
              <span>Заказы, %</span>
              <span>Заказы, руб.</span>
              <span>К клиенту</span>
              <span>От клиента</span>
              <span>Общее кол-во</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
