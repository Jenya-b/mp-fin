export const formatDateISOString = (parameter: string) => new Date(parameter).toISOString();

export const formatDateGeneral = (parameter: string) => {
  const date = new Date(parameter);

  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;

  return `${day}.${month}`;
};

const formatDateBySort = (date: string) => {
  const newDate = date.split('.');
  return [newDate[1], newDate[0], newDate[2]].join('/');
};

export const sortDate = (dateA: string, dateB: string) => {
  const newDateA = formatDateBySort(dateA);
  const newDateB = formatDateBySort(dateB);

  return new Date(newDateA) > new Date(newDateB);
};
