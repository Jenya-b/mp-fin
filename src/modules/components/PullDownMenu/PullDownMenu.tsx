import { useEffect, useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import { IMenu } from 'interfaces/menu';
import { Menu, Link, List } from './PullDownMenu.styled';
import { ControlsBlock } from '../Header/ControlsBlock/ControlsBlock';
import { IRouterPath } from 'interfaces/routerPath';

interface PullDownMenuProps {
  dataMenu: IMenu[];
  extraMenu: IMenu;
  isActiveMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
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
  setActiveMenu,
  isAdmin,
  onSignoutHandler,
  openPage,
  routerPath,
}: PullDownMenuProps) => {
  const [menuList, setMenuList] = useState(dataMenu);

  useEffect(() => {
    if (isAdmin) setMenuList((state) => [...state, extraMenu]);
  }, [isAdmin]);

  const closeMenu = () => setActiveMenu(false);

  return (
    <Menu isActiveMenu={isActiveMenu}>
      <List>
        {menuList.map(({ href, title }) => (
          <li key={title}>
            <Link to={href} onClick={closeMenu}>
              {title}
            </Link>
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
