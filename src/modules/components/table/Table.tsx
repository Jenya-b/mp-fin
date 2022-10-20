import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

interface Props<T> {
  data: T[] | undefined;
  renderRow: (item: T) => JSX.Element;
  renderColumnNames: () => JSX.Element;
}

export const BasicTable = <T,>({ renderRow, data = [], renderColumnNames }: Props<T>) => {
  if (!data.length) return <>Нет данных для отображения</>;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>{renderColumnNames()}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>{renderRow(item)}</TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
