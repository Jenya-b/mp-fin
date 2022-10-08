import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontStylesRegular, fontStylesRegularBold } from '../../../styles/typography';

interface MenuItemProps {
  srcImg: string;
  title: string;
  href: string;
}

export const MenuItem = ({ srcImg, title, href }: MenuItemProps) => {
  return (
    <Link to={href}>
      <Item>
        <ImageWrapp>
          <Image src={srcImg}></Image>
        </ImageWrapp>
        <Title>{title}</Title>
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
