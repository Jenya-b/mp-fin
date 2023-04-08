import { ITablecolumns } from 'interfaces/tables';
import { StyledTableCellColl } from './TableColumns.styled';

interface TableColumnsProps {
  columnNames: ITablecolumns[];
}

export const TableColumns = ({ columnNames }: TableColumnsProps) => (
  <>
    {columnNames.map(({ title }) => (
      <StyledTableCellColl key={title}>{title}</StyledTableCellColl>
    ))}
  </>
);
