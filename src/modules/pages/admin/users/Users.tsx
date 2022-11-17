import { usersColumnNames } from 'constants/table';
import { BasicTable } from 'modules/components/table/Table';
import { Loader } from 'modules/components/loader/Loader';
import { StyledTableCell, StyledTableCellColl } from 'modules/components/table/TableCell';
import { useGetAdminPanelUsersQuery } from 'services';
import { IUsersInAdminPanel } from 'services/types';
import { Main, MainTitle } from 'styles/components';

export const Users = () => {
  const { data: users, isLoading: isLoadingGetUsers } = useGetAdminPanelUsersQuery(null);
  const renderColumnNames = () => (
    <>
      {usersColumnNames.map((item) => (
        <StyledTableCellColl key={item.title}>{item.title}</StyledTableCellColl>
      ))}
    </>
  );

  const renderRow = (item: IUsersInAdminPanel) => (
    <>
      <StyledTableCell>
        {item.name} {item.surname}
      </StyledTableCell>
      <StyledTableCell>{item.email}</StyledTableCell>
      <StyledTableCell>{item.phoneNumber}</StyledTableCell>
      <StyledTableCell>{item.telegram}</StyledTableCell>
      <StyledTableCell>{item.balance}</StyledTableCell>
    </>
  );

  return (
    <Main>
      {isLoadingGetUsers && <Loader />}
      <MainTitle>Список пользователей</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={users ?? []} />
    </Main>
  );
};
