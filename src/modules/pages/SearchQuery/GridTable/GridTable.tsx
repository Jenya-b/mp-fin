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

export const GridTable = ({ article, date, parameters }: IArticleQueries) => (
  <TableWrapp>
    <TableHeaders>
      <FirstTableHeader>Арт.№ {article}</FirstTableHeader>
      <SecondTableHeader>
        {createArray(7).map((item, index) => (
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
        <Rows key={title} title={title} statistics={statistics} />
      ))}
    </RowsWrapp>
  </TableWrapp>
);
