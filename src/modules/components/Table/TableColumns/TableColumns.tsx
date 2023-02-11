import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Colors } from 'constants/colors';
import { ITablecolumns } from 'interfaces/tables';

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

export const StyledTableCellColl = styled(TableCell)`
  color: ${Colors.MainBlack};
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  padding-left: 40px;
  padding-right: 70px;

  @media (max-width: 1300px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
