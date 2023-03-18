import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { FilterByArticles } from './FilterByArticles';

const propsWithData = {
  setArticleNameFilter: jest.fn(),
  arrArticles: ['art1', 'art2'],
  allArticles: [
    {
      articleId: 'id1',
      articleName: 'article',
      costPrice: 1,
      itemCode: '123',
    },
  ],
};

const propsWithoutData = {
  setArticleNameFilter: jest.fn(),
  arrArticles: [],
  allArticles: [],
};

describe('FilterArticles component', () => {
  test('render component', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FilterByArticles {...propsWithData} />
      </ThemeProvider>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/article/i)).toBeInTheDocument();
  });

  test('onChange works', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FilterByArticles {...propsWithData} />
      </ThemeProvider>
    );

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(propsWithData.setArticleNameFilter).toHaveBeenCalledTimes(1);
  });

  test('render component without data', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FilterByArticles {...propsWithoutData} />
      </ThemeProvider>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).toBeNull();
  });
});
