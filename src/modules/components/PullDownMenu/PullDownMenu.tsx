import { useEffect, useState } from 'react';
import { IMenu } from 'interfaces/menu';
import { Menu, Link, List } from './PullDownMenu.styled';

interface PullDownMenuProps {
  dataMenu: IMenu[];
  extraMenu: IMenu;
  isActiveMenu: boolean;
  isAdmin: boolean | undefined;
}

export const PullDownMenu = ({ dataMenu, extraMenu, isActiveMenu, isAdmin }: PullDownMenuProps) => {
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
    </Menu>
  );
};
