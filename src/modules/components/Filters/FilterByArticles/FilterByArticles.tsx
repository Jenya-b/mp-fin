import { IArticle } from 'services/types';
import { Filter, Input, Item, Label, List, Subtitle } from '../Filters.styled';

interface FilterWeekProps {
  arrArticles: string[];
  allArticles: IArticle[];
  setArticleNameFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterByArticles = ({
  arrArticles,
  allArticles,
  setArticleNameFilter,
}: FilterWeekProps) => (
  <Filter>
    <Subtitle>Артикулы:</Subtitle>
    <List>
      {allArticles.map(({ articleId, itemCode }) => (
        <Item key={articleId}>
          <Label htmlFor={itemCode}>
            <Input
              id={itemCode}
              type="checkbox"
              checked={arrArticles.includes(itemCode)}
              onChange={setArticleNameFilter}
            />{' '}
            {''}
            {itemCode}
          </Label>
        </Item>
      ))}
    </List>
  </Filter>
);
