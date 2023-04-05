import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { PercentBar } from './PercentBar';

describe('PercentBar component', () => {
  test('render component', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PercentBar value={1000.45} maxValue={200} />
      </ThemeProvider>
    );

    expect(screen.getByText('1 000,45')).toBeInTheDocument();
  });

  test('snapshot component', () => {
    const tree = render(
      <ThemeProvider theme={baseTheme}>
        <PercentBar value={1000.45} maxValue={200} />
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });

  test('styles ColorBlock at percent >= 70', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PercentBar value={90} maxValue={100} />
      </ThemeProvider>
    );

    const colorBlock = screen.getByTestId('percent-color');
    expect(colorBlock).toHaveStyle({
      maxWidth: '90%',
      backgroundColor: 'rgba(8, 130, 8, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '65%',
      backgroundColor: 'rgba(8, 130, 8, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '29%',
      backgroundColor: 'rgba(8, 130, 8, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '90%',
      backgroundColor: 'rgba(239, 187, 90, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '90%',
      backgroundColor: 'rgba(244, 67, 54, 0.35)',
    });
  });

  test('styles ColorBlock at 70 > percent >=30', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PercentBar value={69} maxValue={100} />
      </ThemeProvider>
    );

    const colorBlock = screen.getByTestId('percent-color');
    expect(colorBlock).toHaveStyle({
      maxWidth: '69%',
      backgroundColor: 'rgba(239, 187, 90, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '71%',
      backgroundColor: 'rgba(239, 187, 90, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '29%',
      backgroundColor: 'rgba(239, 187, 90, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '69%',
      backgroundColor: 'rgba(8, 130, 8, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '69%',
      backgroundColor: 'rgba(244, 67, 54, 0.35)',
    });
  });

  test('styles ColorBlock at percent < 30', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PercentBar value={29} maxValue={100} />
      </ThemeProvider>
    );

    const colorBlock = screen.getByTestId('percent-color');
    expect(colorBlock).toHaveStyle({
      maxWidth: '29%',
      backgroundColor: 'rgba(244, 67, 54, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '65%',
      backgroundColor: 'rgba(244, 67, 54, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '90%',
      backgroundColor: 'rgba(244, 67, 54, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '29%',
      backgroundColor: 'rgba(239, 187, 90, 0.35)',
    });
    expect(colorBlock).not.toHaveStyle({
      maxWidth: '29%',
      backgroundColor: 'rgba(8, 130, 8, 0.35)',
    });
  });
});
