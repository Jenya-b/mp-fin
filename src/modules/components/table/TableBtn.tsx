import styled from 'styled-components';

export interface TableButtonProps {
  children?: string;
  handleClick?: () => void;
  title: string;
  src: string;
}

export const TableButton = ({ handleClick, title, src }: TableButtonProps) => {
  return (
    <ButtonWrapper onClick={handleClick}>
      <ButtonIcon src={src}></ButtonIcon>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const ButtonIcon = styled.img``;
const ButtonTitle = styled.div``;
