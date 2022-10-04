import styled from 'styled-components';
import { fontStylesRegularBold } from '../../../styles/typography';

interface PrimaryButtonProps {
  text: string;
}

const Button = styled.button`
  width: 100%;
  height: ${({ theme }) => theme.sizes.primaryBtn.height}px;
  border-radius: ${({ theme }) => theme.borders.primaryBtn.borderRadius}px;
  color: ${({ theme }) => theme.colors.primaryBtn};
  background: ${({ theme }) => theme.colors.primaryBtnbackground};
  transition: all ${({ theme }) => theme.transitions.button.time}s;
  ${fontStylesRegularBold}

  :hover {
    background: ${({ theme }) => theme.colors.primaryBtnHover};
  }

  :active {
    background: ${({ theme }) => theme.colors.primaryBtnHover};
  }
`;

export const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return <Button>{text}</Button>;
};
