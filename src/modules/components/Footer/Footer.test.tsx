import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { Footer } from './Footer';
import { StyledFooter, FooterInfo } from './Footer.styled';

describe('Snapshot Footer styled-components', () => {
  test('StyledFooter', () => {
    const tree = renderer.create(<StyledFooter theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('FooterInfo', () => {
    const tree = renderer.create(<FooterInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Footer component', () => {
  test('it renders', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Footer />
      </ThemeProvider>
    );
    expect(screen.getByText('© MpFin, 2022. Все права защищены')).toBeInTheDocument();
  });
});
