interface TableRowProps<T> {
  row?: T[];
  renderItem: (item: T, i: number, arr: T[]) => JSX.Element;
  renderEmpty: JSX.Element;
}

export const TableRow = <T,>({ row, renderItem, renderEmpty }: TableRowProps<T>) => {
  if (!row) return renderEmpty;

  return <>{row.map((item, i, arr) => renderItem(item, i, arr))}</>;
};
