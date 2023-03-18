import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { Menu } from './Menu';

const props = {
  list: [
    {
      srcImg: 'src',
      title: 'title',
      href: 'href',
    },
  ],
};

describe('Menu component', () => {
  test('render component with open menu', () => {
    jest.useFakeTimers();

    render(
      <MemoryRouter>
        <ThemeProvider theme={baseTheme}>
          <Menu {...props} isActive={true} />
        </ThemeProvider>
      </MemoryRouter>
    );

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });

  test('render component with hidden menu', () => {
    jest.useFakeTimers();

    render(
      <MemoryRouter>
        <ThemeProvider theme={baseTheme}>
          <Menu {...props} isActive={false} />
        </ThemeProvider>
      </MemoryRouter>
    );

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByText(/title/i)).toBeNull();
  });
});
