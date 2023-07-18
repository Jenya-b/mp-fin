import styled from 'styled-components';

import { fontStylesCaption, fontStylesCaptionBig } from 'styles/typography';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  column-gap: 10px;

  @media (${({ theme }) => theme.media.extraLarge}) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 20px;
  }
`;

export const Item = styled.li`
  ${fontStylesCaptionBig}

  a {
    color: ${({ theme }) => theme.colors.textBase};

    &.active {
      color: ${({ theme }) => theme.colors.textAttentionPrimary};
      text-decoration: underline;
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    ${fontStylesCaption}
  }
`;

export const TextInfo = styled.h3`
  margin-top: 20px;
`;
