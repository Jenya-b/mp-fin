import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { colorMainWhite } from 'constants/colors';
import { v4 } from 'uuid';
import { SearchInput } from 'styles/components';
import { StyledTableCell } from 'modules/components/Table/TableCell';
interface Props<T> {
  isSearch?: boolean;
  searchValue?: string;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  data: T[] | undefined;
  renderRow: (item: T) => JSX.Element;
  renderColumnNames: () => JSX.Element;
}

export const BasicTable = <T,>({
  renderRow,
  data = [],
  renderColumnNames,
  isSearch,
  searchValue,
  handleChange,
}: Props<T>) => {
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
      {isSearch && (
        <SearchInput
          type="text"
          placeholder="Поле поиска"
          value={searchValue}
          onChange={handleChange}
          style={{
            maxWidth: 517,
            marginTop: 50,
            marginLeft: 40,
            marginBottom: 35,
          }}
        />
      )}
      <Table>
        <TableHead>
          <TableRow>{renderColumnNames()}</TableRow>
        </TableHead>

        <TableBody>
          {!data.length ? (
            <TableRow>
              <StyledTableCell style={{ border: 'none' }}>
                Нет данных для отображения
              </StyledTableCell>
            </TableRow>
          ) : (
            data.map((item) => <TableRow key={v4()}>{renderRow(item)}</TableRow>)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
