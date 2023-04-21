import styled from 'styled-components';
import { ButtonMailStyles } from 'styles/fragments';
import {
  fontStylesCaption,
  fontStylesH1,
  fontStylesH2,
  fontStylesRegularBold,
} from 'styles/typography';

export const Main = styled.main`
  padding: 50px 60px 80px 60px;

  @media (${({ theme }) => theme.media.extraLarge}) {
    padding: 40px 30px;
  }

  @media (${({ theme }) => theme.media.large}) {
    padding: 25px 25px;
  }
`;

export const MainTitle = styled.h1`
  ${fontStylesH1}
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const MainSubtitle = styled.h2`
  ${fontStylesH2}
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const PrimaryButton = styled.button`
  color: ${({ theme }) => theme.colors.textSecondary};
  ${ButtonMailStyles}
`;

export const SecondaryButton = styled(PrimaryButton)`
  width: 100%;
  height: ${({ theme }) => theme.sizes.primaryBtn.height}px;
  ${fontStylesRegularBold}
`;

export const PrimaryInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes.inputForm.height}px;
  padding-left: 20px;
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textTertiary};
  border-radius: ${({ theme }) => theme.borders.inputForm.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  transition: all ${({ theme }) => theme.transitions.input.time}s;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.borderSecondary};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.borderTertiary};
  }
`;

export const SecondaryInput = styled(PrimaryInput)`
  background: ${({ theme }) => theme.colors.backgroundBase};
`;

export const Checkbox = styled.input``;
