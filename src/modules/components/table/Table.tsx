import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { colorMainWhite } from '../../../constants/colors';
import { v4 } from 'uuid';

interface Props<T> {
  data: T[] | undefined;
  renderRow: (item: T) => JSX.Element;
  renderColumnNames: () => JSX.Element;
}

export const BasicTable = <T,>({ renderRow, data = [], renderColumnNames }: Props<T>) => {
  if (!data.length) return <p style={{ marginTop: 39 }}>Нет данных для отображения</p>;

  return (
    <TableContainer
      style={{
        background: colorMainWhite,
        marginTop: 39,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        border: '1px solid #F2F2F2',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>{renderColumnNames()}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={v4()}>{renderRow(item)}</TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
