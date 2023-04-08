import { css } from 'styled-components';

export const flexCenterAll = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const linkStyles = css`
  a {
    color: ${({ theme }) => theme.colors.backgroundTertiary};

    :hover {
      color: ${({ theme }) => theme.colors.backgroundSecondary};
    }
  }
`;

export const ButtonMailStyles = css`
  border-radius: ${({ theme }) => theme.borders.primaryBtn.borderRadius}px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  transition: all ${({ theme }) => theme.transitions.button.time}s;

  :hover,
  :active {
    background: ${({ theme }) => theme.colors.backgroundTertiary};
  }
`;
