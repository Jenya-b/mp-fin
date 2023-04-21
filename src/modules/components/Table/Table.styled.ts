import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import { styled as styledMUI } from '@mui/material/styles';
import { Colors } from 'constants/colors';

interface StyledTableProps {
  gridTemplateStyled: string;
}

export const StyledTable = styledMUI(Table)<StyledTableProps>`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns: ${(props) => props.gridTemplateStyled};
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: auto;

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    position: sticky;
    top: 0;
    padding-bottom: 25px;
    text-align: left;
  }
`;

export const StyledTableCell = styledMUI(TableCell)`
  color: ${Colors.MainGreyPrimary};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding-left: 40px;
  padding-right: 70px;

  @media (max-width: 1300px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
