import { renderHook } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  test('get initial value', () => {
    const {
      result: { current },
    } = renderHook(() => useDebounce('test', 1000));

    expect(current).toBe('test');
    expect(current).not.toBe('jest');
  });
});
