import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { FiltersBlock } from './Filters';

const props = {
  setCountChart: jest.fn(),
  countChart: 1,
  countChartParam: [1, 2],
  weekIdFilter: ['id1', 'id2'],
  filtersData: {
    articles: [
      {
        id: 1,
        supplierItemCode: 'string',
        costPrice: 1,
        itemCode: 'string',
        userId: 'string',
      },
    ],
    weeksList: [
      {
        weekEnd: 'string',
        weekNumber: 1,
        weekStart: 'string',
        id: 'string',
      },
    ],
  },
  setWeekIdFilter: jest.fn(),
  articleNameFilter: ['art1', 'art2'],
  setArticleNameFilter: jest.fn(),
  analiticYear: 2023,
  setAnaliticYear: jest.fn(),
};

describe('FiltersBlock component', () => {
  test('FiltersBlock render', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FiltersBlock {...props} />
      </ThemeProvider>
    );
    expect(screen.getByText('Фильтры')).toBeInTheDocument();
  });
  test('FiltersBlock snapshot', () => {
    const tree = render(
      <ThemeProvider theme={baseTheme}>
        <FiltersBlock {...props} />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});
