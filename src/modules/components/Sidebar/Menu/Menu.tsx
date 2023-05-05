import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMenu } from 'interfaces/menu';
import { Item, MenuList, Title, Image } from './Menu.styled';

interface MenuProps {
  list: IMenu[];
  isActive: boolean;
}

export const Menu = ({ list, isActive }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isActive) return setVisible(false);

    const handler = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(handler);
  }, [isActive]);

  return (
    <MenuList>
      {list.map(({ href, srcImg, title }) => (
        <Link to={href} key={title}>
          <Item>
            <div>
              <Image src={srcImg} />
            </div>
            {visible && <Title>{title}</Title>}
          </Item>
        </Link>
      ))}
    </MenuList>
  );
};
