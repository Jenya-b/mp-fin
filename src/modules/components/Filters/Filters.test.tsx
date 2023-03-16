import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { FiltersBlock } from './Filters';

const props = {
  setCountChart: () => {},
  setWeekIdFilter: () => {},
  setArticleNameFilter: () => {},
  countChart: 1,
  countChartParam: [1, 2],
  weekIdFilter: ['id1', 'id2'],
  articleNameFilter: ['art1', 'art2'],
  filtersData: {
    articles: [
      {
        articleId: 'string',
        articleName: 'string',
        costPrice: 1,
        itemCode: 'string',
      },
    ],
    weeksList: [
      {
        weekEnd: 'string',
        weekNumber: 1,
        weekStart: 'string',
        weekId: 'string',
      },
    ],
  },
};

describe('FiltersBlock component', () => {
  test('FiltersBlock render', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FiltersBlock {...props} />
      </ThemeProvider>
    );
    expect(screen.getByText('Фильтр')).toBeInTheDocument();
  });
});
