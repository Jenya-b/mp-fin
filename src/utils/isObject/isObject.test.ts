import { isObject } from './isObject';

test('Check for an object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject(null)).toBe(false);
});
