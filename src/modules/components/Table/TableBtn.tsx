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
      <img src={src} alt="" />
      <div>{title}</div>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: ${({ theme }) => theme.cursor};
`;
