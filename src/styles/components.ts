import styled from 'styled-components';
import { fontStylesCaption, fontStylesRegularBold } from './typography';

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.borders.primaryBtn.borderRadius}px;
  color: ${({ theme }) => theme.colors.btn};
  background: ${({ theme }) => theme.colors.btnbackground};
  transition: all ${({ theme }) => theme.transitions.button.time}s;

  :hover {
    background: ${({ theme }) => theme.colors.btnHover};
  }

  :active {
    background: ${({ theme }) => theme.colors.btnHover};
  }
`;

export const PrimaryButton = styled(Button)`
  width: 100%;
  height: ${({ theme }) => theme.sizes.primaryBtn.height}px;
  ${fontStylesRegularBold}
`;

export const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes.inputForm.height}px;
  padding-left: 20px;
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.inputFormText};
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

export const PrimaryInput = styled(Input)`
  background: ${({ theme }) => theme.colors.inputFormBackground};
`;
