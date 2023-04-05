import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'store/store';
import { baseTheme } from 'styles/theme';
import { Sidebar } from './Sidebar';
import { Menu } from './Menu/Menu';
import { menuSidebar } from 'constants/menu';

jest.mock('./Menu/Menu', () => ({
  Menu: jest.fn(() => <div data-testid="Menu" />),
}));

describe('Sidebar component', () => {
  test('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={baseTheme}>
            <Sidebar />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(Menu).toHaveBeenCalledWith(
      expect.objectContaining({ isActive: false, list: menuSidebar }),
      expect.anything()
    );
  });
});
