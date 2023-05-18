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
  const renderItem = (item: IStatistics, index: number, arr: IStatistics[]) => {
    const nextParams = arr[index + 1];

    return (
      <td key={index}>
        <Params>
          {cities.map((city, i) => (
            <li key={i}>
              {!nextParams || nextParams[city] === item[city] ? (
                item[city]
              ) : item[city] > nextParams[city] ? (
                <>
                  {item[city]}
                  <span style={{ color: 'red' }}>🠗</span>
                </>
              ) : (
                <>
                  {item[city]}
                  <span style={{ color: 'green' }}>🠕</span>
                </>
              )}
            </li>
          ))}
        </Params>
      </td>
    );
  };

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
            <span title={title}>{title}</span>
          </td>
          <TableRow row={statistics} renderItem={renderItem} renderEmpty={<></>} />
        </tr>
      ))}
    </tbody>
  );
};
