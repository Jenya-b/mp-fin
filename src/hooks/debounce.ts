import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay = 300) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
