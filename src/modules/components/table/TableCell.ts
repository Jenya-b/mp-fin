import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { colorMainGreyPrimary, colorMainBlack } from '../../../constants/colors';

export const StyledTableCell = styled(TableCell)`
  color: ${colorMainGreyPrimary};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding-left: 40px;
  padding-right: 70px;
`;

export const StyledTableCellColl = styled(TableCell)`
  color: ${colorMainBlack};
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  padding-left: 40px;
  padding-right: 70px;
`;
