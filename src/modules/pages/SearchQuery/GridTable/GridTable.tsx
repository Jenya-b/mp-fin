import { cities } from 'constants/cities';
import { IArticleQueries } from 'services/types';
import { createArray } from 'utils';
import { subtractDate } from 'utils/formatDate/formatDate';
import {
  TableWrapp,
  FirstTableHeader,
  HeaderDate,
  HeaderParam,
  SecondTableHeader,
  TableHeaders,
  RowsWrapp,
  List,
  Item,
} from './GridTable.styled';
import { Rows } from './Rows';

interface GridTableProps extends IArticleQueries {
  deleteSavedArticle: (article: string, query: string) => void;
  numDate: number;
}

export const GridTable = ({
  article,
  date,
  parameters,
  numDate,
  deleteSavedArticle,
}: GridTableProps) => (
  <TableWrapp>
    <TableHeaders>
      <FirstTableHeader>Арт.№ {article}</FirstTableHeader>
      <SecondTableHeader>
        {createArray(numDate).map((_, index) => (
          <HeaderParam key={index}>
            <HeaderDate>{subtractDate(date, index)}</HeaderDate>
            <List>
              {cities.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </List>
          </HeaderParam>
        ))}
      </SecondTableHeader>
    </TableHeaders>
    <RowsWrapp>
      {parameters.map(({ title, statistics }) => (
        <Rows
          key={title}
          title={title}
          statistics={statistics}
          article={article}
          deleteSavedArticle={deleteSavedArticle}
        />
      ))}
    </RowsWrapp>
  </TableWrapp>
);
