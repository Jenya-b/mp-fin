import styled from 'styled-components';
import { ButtonMailStyles } from 'styles/fragments';
import {
  fontStylesCaption,
  fontStylesH1,
  fontStylesH2,
  fontStylesRegularBold,
} from 'styles/typography';

export const Main = styled.main`
  padding: 80px 60px;
`;

export const MainTitle = styled.h1`
  ${fontStylesH1}
  color: ${({ theme }) => theme.colors.mainTitle};
`;

export const MainSubtitle = styled.h2`
  ${fontStylesH2}
  color: ${({ theme }) => theme.colors.mainTitle};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.btn};
  ${ButtonMailStyles}
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

export const SearchInput = styled(Input)`
  background: ${({ theme }) => theme.colors.inputFormBackground};
`;

export const Checkbox = styled.input``;
