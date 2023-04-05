import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { FilterBySelectParams } from './FilterBySelectParams';

const props = {
  setParameter: jest.fn(),
  thisParameter: 1,
  parameters: [1, 2],
  title: 'Количество графиков:',
  nameLocalStorage: 'countChart',
  isFullWidth: true,
};

describe('FilterBySelectParams component', () => {
  test('select options', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FilterBySelectParams {...props} />
      </ThemeProvider>
    );

    expect((screen.getByRole('option', { name: '1' }) as HTMLOptionElement).selected).toBe(true);
    expect((screen.getByRole('option', { name: '2' }) as HTMLOptionElement).selected).toBe(false);
    expect(screen.queryByRole('option', { name: '3' })).toBeNull();
  });
});
