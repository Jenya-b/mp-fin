export const isObject = <T>(empty: T) => {
  if (typeof empty === 'object' && empty !== null) {
    return true;
  }
  return false;
};
