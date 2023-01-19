import { IMenu } from 'interfaces/sidebar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontStylesRegular } from 'styles/typography';

interface MenuProps {
  list: IMenu[];
  isActive: boolean;
}

export const Menu = ({ list, isActive }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isActive) return setVisible(false);

    setTimeout(() => setVisible(true), 80);
  }, [isActive]);

  return (
    <MenuList>
      {list.map(({ href, srcImg, title }) => (
        <Link to={href} key={title}>
          <Item>
            <ImageWrapp>
              <Image src={srcImg} />
            </ImageWrapp>
            {visible && <Title>{title}</Title>}
          </Item>
        </Link>
      ))}
    </MenuList>
  );
};

const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const ImageWrapp = styled.div``;

const Image = styled.img``;

const Title = styled.p`
  ${fontStylesRegular}
  color: ${({ theme }) => theme.colors.sidebarTextMenu};
`;

export const MenuList = styled.ul`
  padding-top: 40px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
