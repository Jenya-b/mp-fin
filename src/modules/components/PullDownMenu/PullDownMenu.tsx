import { IMenu } from 'interfaces/menu';
import { Menu, Link, List } from './PullDownMenu.styled';

interface PullDownMenuProps {
  dataMenu: IMenu[];
  isActiveMenu: boolean;
}

export const PullDownMenu = ({ dataMenu, isActiveMenu }: PullDownMenuProps) => {
  return (
    <Menu isActiveMenu={isActiveMenu}>
      <List>
        {dataMenu.map(({ href, title }) => (
          <li key={title}>
            <Link to={href}>{title}</Link>
          </li>
        ))}
      </List>
    </Menu>
  );
};
