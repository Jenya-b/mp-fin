import {
  formatDateGeneral,
  formatDateISOString,
  getDefaultValueByInputDate,
  getFullDate,
} from './formatDate';

describe('Format date', () => {
  test('Get date ISO', () => {
    expect(formatDateISOString('10.01.2021')).toBe('2021-09-30T21:00:00.000Z');
  });
  test('Get full date', () => {
    const result = {
      day: '01',
      month: '01',
      year: 2000,
    };
    expect(getFullDate(new Date('01.01.2000'))).toEqual(result);
  });
  test('Format date general', () => {
    expect(formatDateGeneral('2022-01-09T20:59:32')).toBe('09.01');
    expect(formatDateGeneral('2022-01-09T20:59:32', true)).toBe('01.09.2022');
  });
  test('Get default value by input date', () => {
    expect(getDefaultValueByInputDate(new Date('01.01.2000'))).toBe('2000-01-01');
  });
});
