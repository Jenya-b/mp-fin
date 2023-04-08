import styled from 'styled-components';

interface ICountColumns {
  count: number;
}

export const StyledTable = styled.table<ICountColumns>`
  margin-top: 40px;
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns: minmax(230px, 1fr) repeat(${({ count }) => count}, minmax(400px, 1fr));
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    text-align: left;
    font-weight: 500;

    div {
      text-align: center;
      margin-bottom: 5px;
    }
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Params = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;

  li {
    width: 50px;
    text-align: center;
    text-transform: uppercase;
  }
`;
