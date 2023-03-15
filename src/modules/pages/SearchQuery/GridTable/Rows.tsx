import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { cities } from 'constants/cities';
import { IParam, IStatistics } from 'interfaces/searchQuery';
import { Parameters, RowName, RowWrapp, List, Item } from './GridTable.styled';

interface RowsProps extends IParam {
  deleteSavedArticle: (article: string, query: string) => void;
  article: string;
}

export const Rows = ({ statistics, title, article, deleteSavedArticle }: RowsProps) => {
  const renderRow = (item: IStatistics, i: number) => (
    <List key={i}>
      {cities.map((city) => (
        <Item key={city}>{item[city]}</Item>
      ))}
    </List>
  );

  return (
    <RowWrapp>
      <RowName>
        <Tooltip title="Delete" onClick={() => deleteSavedArticle(article, title)}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {title}
      </RowName>
      <Parameters>{statistics.map((item, i) => renderRow(item, i))}</Parameters>
    </RowWrapp>
  );
};
