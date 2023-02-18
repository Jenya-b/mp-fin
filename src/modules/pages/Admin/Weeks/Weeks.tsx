import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { weekColumnNames } from 'constants/tables';
import { Loader } from 'modules/components/Loader/Loader';
import { BasicTable } from 'modules/components/Table/Table';
import { StyledTableCell } from 'modules/components/Table/TableCell';
import { useCreateWeekMutation, useGetWeeksQuery } from 'services';
import { IWeek, IWeekWithParam } from 'services/types';
import { Main, MainTitle, SecondaryButton } from 'styles/components';
import { formatDateISOString } from 'utils';
import { TableColumns } from 'modules/components/Table/TableColumns/TableColumns';
import { Form, Label, InputAdminPanel, Container } from '../Admin.styled';
import { getListOfYears, getThisYear } from 'utils/formatDate';
import { FilterSelectParam } from 'modules/components/Filters/FilterSelectParam';

export const Weeks = () => {
  const [weeksByYears, setWeeksByYears] = useState<IWeekWithParam[]>([]);
  const [year, setYear] = useState<number>(getThisYear());
  const { data: weeks, isLoading: isLoadingGetWeeks } = useGetWeeksQuery(null);
  const [fetchAddWeek, { isLoading: isLoadingAddWeek }] = useCreateWeekMutation();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!weeks || !weeks.length) return;

    setWeeksByYears(
      weeks.filter(({ weekStart }) => weekStart.split('.').reverse()[0] === year.toString())
    );
  }, [weeks, year]);

  const renderColumnNames = () => <TableColumns columnNames={weekColumnNames} />;

  const renderRow = (item: IWeek) => (
    <>
      <StyledTableCell>{item.weekNumber}</StyledTableCell>
      <StyledTableCell>{item.weekStart}</StyledTableCell>
      <StyledTableCell>{item.weekEnd}</StyledTableCell>
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
      <Container>
        <Form onSubmit={onSubmit}>
          <Label>
            Номер недели
            <InputAdminPanel type="number" {...register('weekNumber')} />
          </Label>
          <Label>
            Начало недели
            <InputAdminPanel type="date" {...register('weekStart')} />
          </Label>
          <Label>
            Конец недели
            <InputAdminPanel type="date" {...register('weekEnd')} />
          </Label>
          <SecondaryButton>Добавить неделю</SecondaryButton>
        </Form>
        <FilterSelectParam
          setParameter={setYear}
          thisParameter={year}
          parameters={getListOfYears()}
          title="Выберите год:"
          isFullWidth={false}
        />
        <BasicTable
          renderRow={renderRow}
          renderColumnNames={renderColumnNames}
          data={weeksByYears}
        />
      </Container>
    </Main>
  );
};
