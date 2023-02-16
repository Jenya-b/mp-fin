export const formatDateISOString = (parameter: string) => new Date(parameter).toISOString();

export const formatDateGeneral = (parameter: string, full = false) => {
  const date = new Date(parameter);

  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return full ? `${month}.${day}.${year}` : `${day}.${month}`;
};
