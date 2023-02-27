import renderer from 'react-test-renderer';
import { baseTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

export function renderWithTheme(component: JSX.Element) {
  return renderer.create(<ThemeProvider theme={baseTheme}>{component}</ThemeProvider>);
}
