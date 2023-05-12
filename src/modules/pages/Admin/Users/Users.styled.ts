import styled from 'styled-components';
import { css } from '@mui/material/styles';

export const AssignedRoles = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
`;
export const AssignedRolesDesc = styled.div``;
export const AssignedRolesButton = styled.div``;

export const gridTemplateStyled = css`
  grid-template-columns: repeat(5, minmax(250px, 1fr)) minmax(400px, 1fr);
`;
