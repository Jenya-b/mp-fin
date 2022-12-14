import { IArticle } from 'services/types';
import { Filter, Input, Item, Label, List, Subtitle } from './Filter.styled';

interface FilterWeekProps {
  articles: IArticle[];
  setArticleNameFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterArticles = ({ articles, setArticleNameFilter }: FilterWeekProps) => (
  <Filter>
    <Subtitle>Артикулы:</Subtitle>
    <List>
      {articles.map(({ articleId, articleName }) => (
        <Item key={articleId}>
          <Label htmlFor={articleName}>
            <Input id={articleName} type="checkbox" onChange={setArticleNameFilter} /> {''}
            {articleName}
          </Label>
        </Item>
      ))}
    </List>
  </Filter>
);
