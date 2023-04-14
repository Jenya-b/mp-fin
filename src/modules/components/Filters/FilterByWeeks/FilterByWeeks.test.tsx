import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { FilterByWeeks } from './FilterByWeeks';

const propsWithData = {
  arrWeeks: ['1 (03.01 - 09.01)'],
  allWeeks: [
    {
      weekEnd: '2022-01-09T20:59:32',
      weekId: '77cf3a13-73b5-44d9-8c9e-328d67f7122f',
      weekNumber: 1,
      weekStart: '2022-01-03T20:59:32.218',
    },
  ],
  setWeekIdFilter: jest.fn(),
  analiticYear: 2023,
};

const propsWithoutData = {
  arrWeeks: [],
  allWeeks: [],
  setWeekIdFilter: jest.fn(),
  analiticYear: 2023,
};

describe('FilterByWeeks component', () => {
  test('render component', async () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FilterByWeeks {...propsWithData} />
      </ThemeProvider>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('render component without data', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FilterByWeeks {...propsWithoutData} />
      </ThemeProvider>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).toBeNull();
  });
});
