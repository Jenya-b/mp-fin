import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Colors } from 'constants/colors';

export const StyledTableCell = styled(TableCell)`
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
