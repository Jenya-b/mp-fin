import { MIN_YEAR } from 'constants/minYear';

export const formatDateISOString = (parameter: string) => new Date(parameter).toISOString();

export const formatDateGeneral = (parameter: string, full = false) => {
  const date = new Date(parameter);

  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return full ? `${month}.${day}.${year}` : `${day}.${month}`;
};

export const getThisYear = () => {
  const thisDate = new Date();
  const thisYear = thisDate.getFullYear();
  return thisYear;
};

export const getListOfYears = () => {
  const listYears: number[] = [];
  const thisYear = getThisYear();

  for (let i = thisYear; i >= MIN_YEAR; i--) {
    listYears.push(i);
  }

  return listYears;
};
