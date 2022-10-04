import styled from 'styled-components';
import { fontStylesCaption } from '../../../styles/typography';

interface InputProps {
  type: string;
  placeholder: string;
}

const Wrapper = styled.div`
  width: ${({ theme }) => theme.sizes.loginForm.width}px;
`;
const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes.inputForm.height}px;
  padding-left: 20px;
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.inputFormText};
  background: ${({ theme }) => theme.colors.inputFormBackground};
  border-radius: ${({ theme }) => theme.borders.inputForm.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.inputFormBorder};
  transition: all ${({ theme }) => theme.transitions.input.time}s;

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputFormPlaceholder};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.inputFormHoverBord};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.inputFormFocusBord};
  }
`;

export const PrimaryInput = ({ type, placeholder }: InputProps) => (
  <Wrapper>
    <Input type={type} placeholder={placeholder} />
  </Wrapper>
);
