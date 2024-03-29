import { MIN_YEAR } from 'constants/minYear';

export const formatDateISOString = (parameter: string) => new Date(parameter).toISOString();

export const getFullDate = (date: Date, n?: number) => {
  if (n) {
    date.setDate(date.getDate() + n);
  }
  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return { day, month, year };
};

export const formatDateGeneral = (parameter: string, full = false, n?: number) => {
  const date = new Date(parameter);
  const { day, month, year } = getFullDate(date, n);

  return full ? `${month}.${day}.${year}` : `${day}.${month}`;
};

export const getDefaultValueByInputDate = (date: Date, n?: number) => {
  const { day, month, year } = getFullDate(date, n);

  return `${year}-${month}-${day}`;
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

export const subtractDate = (parameter: string, countDays: number) => {
  const date = new Date(parameter);
  date.setDate(date.getDate() - countDays);
  const { day, month, year } = getFullDate(date);

  return `${day}.${month}.${year}`;
};

export const subtractDateWithoutYear = (parameter: string, countDays: number) => {
  const date = subtractDate(parameter, countDays);
  return date.split('.').slice(0, 2).join('.');
};
