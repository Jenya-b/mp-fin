export const setLocalStorage = <T>(key: string, value: T): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key: string) =>
  key && JSON.parse(localStorage.getItem(key) || '{}');
