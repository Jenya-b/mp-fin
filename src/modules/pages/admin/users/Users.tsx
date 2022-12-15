import { usersColumnNames } from 'constants/table';
import { BasicTable } from 'modules/components/Table/Table';
import { Loader } from 'modules/components/Loader/Loader';
import { StyledTableCell } from 'modules/components/Table/TableCell';
import {
  useAppointAdminMutation,
  useGetAdminPanelUsersQuery,
  useRemoveAdminRightsMutation,
} from 'services';
import { IUsersInAdminPanel } from 'services/types';
import { Main, MainTitle } from 'styles/components';
import { AssignedRoles, AssignedRolesButton, AssignedRolesDesc } from './Users.styled';
import { TableColumns } from 'modules/components/Table/TableColumns/TableColumns';

export const Users = () => {
  const { data: users, isLoading: isLoadingGetUsers } = useGetAdminPanelUsersQuery(null);
  const [fetchAppointAdmin, { isLoading: isLoadingAppointAdmin }] = useAppointAdminMutation();
  const [fetchRemoveAdmin, { isLoading: isLoadingRemoveAdmin }] = useRemoveAdminRightsMutation();

  const renderColumnNames = () => <TableColumns columnNames={usersColumnNames} />;

  const renderRow = (item: IUsersInAdminPanel) => (
    <>
      <StyledTableCell>
        {item.name} {item.surname}
      </StyledTableCell>
      <StyledTableCell>{item.email}</StyledTableCell>
      <StyledTableCell>{item.phoneNumber}</StyledTableCell>
      <StyledTableCell>{item.telegram}</StyledTableCell>
      <StyledTableCell>{item.balance}</StyledTableCell>
      <StyledTableCell>
        {item.isAdmin ? (
          <AssignedRoles>
            <AssignedRolesDesc>Администратор</AssignedRolesDesc>
            <AssignedRolesButton onClick={() => removeAdmin(item.email)}>
              Удалить права админа
            </AssignedRolesButton>
          </AssignedRoles>
        ) : (
          <AssignedRoles>
            <AssignedRolesDesc></AssignedRolesDesc>
            <AssignedRolesButton onClick={() => appointAdmin(item.email)}>
              Назначить админом
            </AssignedRolesButton>
          </AssignedRoles>
        )}
      </StyledTableCell>
    </>
  );

  const appointAdmin = (userEmail: string) => {
    fetchAppointAdmin(userEmail);
  };

  const removeAdmin = (userEmail: string) => {
    fetchRemoveAdmin(userEmail);
  };

  return (
    <Main>
      {(isLoadingGetUsers || isLoadingAppointAdmin || isLoadingRemoveAdmin) && <Loader />}
      <MainTitle>Список пользователей</MainTitle>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={users ?? []} />
    </Main>
  );
};
