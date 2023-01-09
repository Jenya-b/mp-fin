import { IArticle } from 'services/types';
import { Filter, Input, Item, Label, List, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  arrArticles: string[];
  allArticles: IArticle[];
  setArticleNameFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterArticles = ({
  arrArticles,
  allArticles,
  setArticleNameFilter,
}: FilterWeekProps) => (
  <Filter>
    <Subtitle>Артикулы:</Subtitle>
    <List>
      {allArticles.map(({ articleId, articleName }) => (
        <Item key={articleId}>
          <Label htmlFor={articleName}>
            <Input
              id={articleName}
              type="checkbox"
              checked={arrArticles.includes(articleName)}
              onChange={setArticleNameFilter}
            />{' '}
            {''}
            {articleName}
          </Label>
        </Item>
      ))}
    </List>
  </Filter>
);
