import { useEffect, useState, MouseEvent } from 'react';
import { IMenu } from 'interfaces/menu';
import { Menu, Link, List } from './PullDownMenu.styled';
import { ControlsBlock } from '../Header/ControlsBlock/ControlsBlock';
import { IRouterPath } from 'interfaces/routerPath';

interface PullDownMenuProps {
  dataMenu: IMenu[];
  extraMenu: IMenu;
  isActiveMenu: boolean;
  isAdmin: boolean | undefined;
  settings: string;
  openPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onSignoutHandler: () => void;
  routerPath: IRouterPath;
}

export const PullDownMenu = ({
  dataMenu,
  extraMenu,
  isActiveMenu,
  isAdmin,
  onSignoutHandler,
  openPage,
  routerPath,
}: PullDownMenuProps) => {
  const [menuList, setMenuList] = useState(dataMenu);

  useEffect(() => {
    if (isAdmin) setMenuList((state) => [...state, extraMenu]);
  }, []);

  return (
    <Menu isActiveMenu={isActiveMenu}>
      <List>
        {menuList.map(({ href, title }) => (
          <li key={title}>
            <Link to={href}>{title}</Link>
          </li>
        ))}
      </List>
      <ControlsBlock
        onSignoutHandler={onSignoutHandler}
        openPage={openPage}
        routerPath={routerPath}
      />
    </Menu>
  );
};
