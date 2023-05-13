import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { v4 } from 'uuid';
import {
  StyledTableCell,
  StyledTable,
  InputSearch,
  StyledTableContainer,
} from 'modules/components/Table/Table.styled';
import { SerializedStyles } from '@emotion/react';

interface Props<T> {
  isSearch?: boolean;
  searchValue?: string;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  data: T[] | undefined;
  renderRow: (item: T) => JSX.Element;
  renderColumnNames: () => JSX.Element;
  gridTemplateStyled: SerializedStyles;
}

export const BasicTable = <T,>({
  renderRow,
  data = [],
  renderColumnNames,
  isSearch,
  searchValue,
  handleChange,
  gridTemplateStyled,
}: Props<T>) => {
  return (
    <StyledTableContainer>
      {isSearch && (
        <InputSearch
          type="text"
          placeholder="Поле поиска"
          value={searchValue}
          onChange={handleChange}
        />
      )}
      <StyledTable gridtemplatestyled={gridTemplateStyled}>
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
      </StyledTable>
    </StyledTableContainer>
  );
};
