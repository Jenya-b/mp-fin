import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontStylesRegular } from '../../../styles/typography';

interface MenuItemProps {
  srcImg: string;
  title: string;
  href: string;
  isActive: boolean;
}

export const MenuItem = ({ srcImg, title, href, isActive }: MenuItemProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isActive) return setVisible(false);

    setTimeout(() => setVisible(true), 80);
  }, [isActive]);

  return (
    <Link to={href}>
      <Item>
        <ImageWrapp>
          <Image src={srcImg}></Image>
        </ImageWrapp>
        {visible && <Title>{title}</Title>}
      </Item>
    </Link>
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
