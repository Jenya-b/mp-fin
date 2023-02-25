import { createArray } from './createArray';

test('Set array length', () => {
  expect(createArray(2)).toEqual([undefined, undefined]);
});
