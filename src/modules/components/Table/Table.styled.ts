import { SerializedStyles } from '@emotion/react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled as styledMUI } from '@mui/material/styles';
import { Colors } from 'constants/colors';
import styled from 'styled-components';
import { SecondaryInput } from 'styles/components';

interface StyledTableProps {
  gridTemplateStyled: SerializedStyles;
}

export const StyledTableContainer = styledMUI(TableContainer)`
	background: ${Colors.MainWhite};
  margin-top: 39px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid ${Colors.MainGreyLight};
`;

export const StyledTable = styledMUI(Table)<StyledTableProps>`
	${({ gridTemplateStyled }) => gridTemplateStyled};
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
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

export const InputSearch = styled(SecondaryInput)`
  width: 517px;
  margin: 50px 0 35px 40px;

  @media (${({ theme }) => theme.media.large}) {
    width: 400px;
    margin: 20px 0 10px 20px;
  }

  @media (${({ theme }) => theme.media.small}) {
    width: 250px;
  }
`;
