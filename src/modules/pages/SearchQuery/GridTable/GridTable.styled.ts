import styled, { css } from 'styled-components';

const ParamFragment = css`
  display: grid;
  grid-template-columns: repeat(7, 350px);
  column-gap: 20px;
`;

const RowFragment = css`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const TableWrapp = styled.div``;

export const TableHeaders = styled.div`
  ${RowFragment}
  background: ${({ theme }) => theme.colors.borderTable};
  font-weight: 600;
`;

export const FirstTableHeader = styled.div`
  align-self: center;
  justify-self: center;
`;

export const SecondTableHeader = styled.div`
  ${ParamFragment}
  padding-top: ${({ theme }) => theme.indents.queryTableRow.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.indents.queryTableRow.paddingBottom}px;
  background: inherit;
`;

export const HeaderParam = styled.div``;

export const HeaderDate = styled.div`
  text-align: center;
  margin-bottom: 7px;
`;

export const RowsWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowWrapp = styled.div`
  ${RowFragment}
  :nth-child(even) {
    background: ${({ theme }) => theme.colors.borderTable};
  }
`;

export const RowName = styled.h2`
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding-top: ${({ theme }) => theme.indents.queryTableRow.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.indents.queryTableRow.paddingBottom}px;
  padding-left: 15px;
`;

export const Parameters = styled.div`
  ${ParamFragment}
  background: inherit;
  padding-top: ${({ theme }) => theme.indents.queryTableRow.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.indents.queryTableRow.paddingBottom}px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  width: 50px;
  text-align: center;
  text-transform: uppercase;
`;
