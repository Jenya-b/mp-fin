import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IParam, IStatistics } from 'interfaces/searchQuery';
import { Params } from '../Table.styled';
import { TableRow } from '../Row/Row';
import { createArray } from 'utils';
import { CitiesType } from 'constants/cities';

interface TBodyProps {
  article: string;
  data: IParam[];
  cities: CitiesType;
  deleteSavedArticle: (article: string, query: string) => void;
}

export const TBody = ({ article, data, cities, deleteSavedArticle }: TBodyProps) => {
  const renderItem = (item: IStatistics) => (
    <td>
      <Params>
        {cities.map((city, i) => (
          <li key={i}>{item[city]}</li>
        ))}
      </Params>
    </td>
  );
  return (
    <tbody>
      <tr style={{ fontWeight: 600 }}>
        {[`Арт.№ ${article}`, ...createArray(7)].map((item, i) => (
          <td key={i}>{item}</td>
        ))}
      </tr>
      {data.map(({ statistics, title }, i) => (
        <tr key={i}>
          <td>
            <Tooltip title="Delete" onClick={() => deleteSavedArticle(article, title)}>
              <IconButton sx={{ padding: '0 7px 0 0' }}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            {title}
          </td>
          <TableRow row={statistics} renderItem={renderItem} renderEmpty={<></>} />
        </tr>
      ))}
    </tbody>
  );
};
