import { weekColumnNames } from 'constants/table';
import { Loader } from 'modules/components/loader/Loader';
import { BasicTable } from 'modules/components/table/Table';
import { StyledTableCell, StyledTableCellColl } from 'modules/components/table/TableCell';
import { useForm } from 'react-hook-form';
import { useCreateWeekMutation, useGetWeeksQuery } from 'services';
import { IWeek } from 'services/types';
import { Main, MainTitle, PrimaryButton } from 'styles/components';
import { formatDateGeneral, formatDateISOString } from 'utils/formatDate';
import { InputDate, Label, WeeksForm } from './Weeks.styled';

export const Weeks = () => {
  const { data: weeks, isLoading: isLoadingGetWeeks } = useGetWeeksQuery(null);
  const [fetchAddWeek, { isLoading: isLoadingAddWeek }] = useCreateWeekMutation();
  const { register, handleSubmit } = useForm();

  const renderColumnNames = () => (
    <>
      {weekColumnNames.map((item) => (
        <StyledTableCellColl key={item.title}>{item.title}</StyledTableCellColl>
      ))}
    </>
  );

  const renderRow = (item: IWeek) => (
    <>
      <StyledTableCell>{item.weekNumber}</StyledTableCell>
      <StyledTableCell>{formatDateGeneral(item.weekStart)}</StyledTableCell>
      <StyledTableCell>{formatDateGeneral(item.weekEnd)}</StyledTableCell>
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
