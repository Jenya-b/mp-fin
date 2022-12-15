import { useForm } from 'react-hook-form';
import { weekColumnNames } from 'constants/table';
import { Loader } from 'modules/components/Loader/Loader';
import { BasicTable } from 'modules/components/Table/Table';
import { StyledTableCell } from 'modules/components/Table/TableCell';
import { useCreateWeekMutation, useGetWeeksQuery } from 'services';
import { IWeek } from 'services/types';
import { Main, MainTitle, PrimaryButton } from 'styles/components';
import { formatDateISOString } from 'utils/formatDate';
import { InputDate, Label, WeeksForm } from './Weeks.styled';
import { TableColumns } from 'modules/components/Table/TableColumns/TableColumns';

export const Weeks = () => {
  const { data: weeks, isLoading: isLoadingGetWeeks } = useGetWeeksQuery(null);
  const [fetchAddWeek, { isLoading: isLoadingAddWeek }] = useCreateWeekMutation();
  const { register, handleSubmit } = useForm();

  const renderColumnNames = () => <TableColumns columnNames={weekColumnNames} />;

  const renderRow = (item: IWeek) => (
    <>
      <StyledTableCell>{item.weekNumber}</StyledTableCell>
      <StyledTableCell>{item.weekStart}</StyledTableCell>
      <StyledTableCell>{item.weekStart}</StyledTableCell>
    </>
  );

  const onSubmit = handleSubmit(({ weekNumber, weekStart, weekEnd }) => {
    fetchAddWeek({
      weekStart: formatDateISOString(weekStart),
      weekEnd: formatDateISOString(weekEnd),
      weekNumber,
    });
  });

  return (
    <Main>
      {(isLoadingGetWeeks || isLoadingAddWeek) && <Loader />}
      <MainTitle>Список недель</MainTitle>
      <WeeksForm onSubmit={onSubmit}>
        <Label>
          Номер недели
          <InputDate type="number" {...register('weekNumber')} />
        </Label>
        <Label>
          Начало недели
          <InputDate type="date" {...register('weekStart')} />
        </Label>
        <Label>
          Конец недели
          <InputDate type="date" {...register('weekEnd')} />
        </Label>
        <PrimaryButton>Добавить неделю</PrimaryButton>
      </WeeksForm>
      <BasicTable renderRow={renderRow} renderColumnNames={renderColumnNames} data={weeks ?? []} />
    </Main>
  );
};
