import { ChangeEvent, useState } from 'react';

export const useFilter = () => {
  const [state, setState] = useState<string[]>([]);

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
