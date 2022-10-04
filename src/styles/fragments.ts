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
