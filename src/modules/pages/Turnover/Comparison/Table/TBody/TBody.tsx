import { IComparisonData, IComparisonParam } from 'services/types';

interface TBodyProps {
  data: IComparisonData[];
  total: IComparisonParam[];
}

export const TBody = ({ data, total }: TBodyProps) => (
  <tbody>
    {data.map(({ itemcodeseller, itemcodewb, parameters, product }) => (
      <tr key={itemcodeseller}>
        <td>{itemcodewb}</td>
        <td>{product}</td>
        <td>{itemcodeseller}</td>
        {parameters.map(
          (
            {
              sales,
              salesPercent,
              salesRub,
              orders,
              ordersPercent,
              ordersRub,
              inWayToClient,
              inWayFromClient,
              quantityFull,
            },
            i
          ) => (
            <td key={i}>
              <div className="th-params">
                <span>{sales}</span>
                <span>{salesPercent}</span>
                <span>{salesRub}</span>
                <span>{orders}</span>
                <span>{ordersPercent}</span>
                <span>{ordersRub}</span>
                <span>{inWayToClient}</span>
                <span>{inWayFromClient}</span>
                <span>{quantityFull}</span>
              </div>
            </td>
          )
        )}
      </tr>
    ))}
    <tr>
      <td></td>
      <td></td>
      <td>Итого:</td>
      {total.map(
        (
          {
            sales,
            salesPercent,
            salesRub,
            orders,
            ordersPercent,
            ordersRub,
            inWayToClient,
            inWayFromClient,
            quantityFull,
          },
          i
        ) => (
          <td key={i}>
            <div className="th-params">
              <span>{sales}</span>
              <span>{salesPercent}</span>
              <span>{salesRub}</span>
              <span>{orders}</span>
              <span>{ordersPercent}</span>
              <span>{ordersRub}</span>
              <span>{inWayToClient}</span>
              <span>{inWayFromClient}</span>
              <span>{quantityFull}</span>
            </div>
          </td>
        )
      )}
    </tr>
  </tbody>
);
