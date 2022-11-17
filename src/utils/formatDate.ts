export const formatDateGeneral = (parameter: string) => {
  const date = new Date(parameter);

  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const formatDateISOString = (parameter: string) => new Date(parameter).toISOString();
