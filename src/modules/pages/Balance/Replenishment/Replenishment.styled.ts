import styled from 'styled-components';
import { fontStylesCaption, fontStylesH1, fontStylesRegularBold } from 'styles/typography';

export const Wrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  padding: 30px 35px;
  border-radius: ${({ theme }) => theme.borders.replenishment.borderRadius}px;
  height: ${({ theme }) => theme.sizes.replenishmentBlock.height}px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  position: relative;

  @media (${({ theme }) => theme.media.small}) {
    padding: 20px 20px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template: 1fr 1.5fr 1fr / minmax(min-content, 613px);
  height: 100%;

  @media (${({ theme }) => theme.media.extraLarge}) {
    grid-template: 1fr 1.5fr 1fr / minmax(min-content, 450px);
  }

  @media (${({ theme }) => theme.media.large}) {
    grid-template: 1fr 1.5fr 1fr / minmax(min-content, 350px);
  }

  @media (${({ theme }) => theme.media.small}) {
    grid-template: 1fr 1.5fr 1fr / 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BalanceTitle = styled.div`
  color: ${({ theme }) => theme.colors.textTertiary};
  ${fontStylesRegularBold}
`;

export const BalanceParam = styled.div`
  ${fontStylesH1}
`;

export const WriteOffTitle = styled.div`
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const WriteOffParam = styled.div`
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.textBase};
`;

export const ImageWrapp = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;

  @media (${({ theme }) => theme.media.large}) {
    img {
      width: 200px;
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;
