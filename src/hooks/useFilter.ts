import { ChangeEvent, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

export const useFilter = (localstorageKey: string) => {
  const ids = getLocalStorage(localstorageKey);
  console.log(Array.isArray(ids));

  const [state, setState] = useState<string[]>(Array.isArray(ids) ? ids : []);

  useEffect(() => {
    setLocalStorage(localstorageKey, state);
  }, [state]);

  const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    if (checked) {
      setState([...state, id]);
    } else {
      setState(state.filter((item) => item != id));
    }
  };

  return [state, changeFilter] as const;
};
