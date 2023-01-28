import { css } from 'styled-components';

export const flexCenterAll = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const linkStyles = css`
  a {
    color: ${({ theme }) => theme.colors.formLink};

    :hover {
      color: ${({ theme }) => theme.colors.formLinkHover};
    }
  }
`;

export const ButtonMailStyles = css`
  border-radius: ${({ theme }) => theme.borders.primaryBtn.borderRadius}px;
  background: ${({ theme }) => theme.colors.btnbackground};
  transition: all ${({ theme }) => theme.transitions.button.time}s;

  :hover,
  :active {
    background: ${({ theme }) => theme.colors.btnHover};
  }
`;
