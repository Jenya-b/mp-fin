import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'store/store';
import { baseTheme } from 'styles/theme';
import { Signin } from './Signin';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

describe('Signin component', () => {
  test('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={baseTheme}>
            <Signin />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    const formTitle = screen.getByText(/кабинет/i);
    expect(formTitle).toBeInTheDocument();
  });

  test('empty all inputs', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={baseTheme}>
            <Signin />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('submit-form'));
    expect(await screen.findAllByText('Поле обязательно к заполнению')).toHaveLength(2);
  });

  test('empty one input', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={baseTheme}>
            <Signin />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText<HTMLInputElement>(/email/i), 'test@test.test');
    await userEvent.click(screen.getByTestId('submit-form'));
    expect(await screen.findAllByText('Поле обязательно к заполнению')).toHaveLength(1);
  });

  test('filled inputs', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={baseTheme}>
            <Signin />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText<HTMLInputElement>(/email/i), 'test@test.test');
    await userEvent.type(screen.getByPlaceholderText<HTMLInputElement>(/пароль/i), 'password');
    await userEvent.click(screen.getByTestId('submit-form'));
    expect(await screen.queryByText('Поле обязательно к заполнению')).not.toBeInTheDocument();
  });
});
