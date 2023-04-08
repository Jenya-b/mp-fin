import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.backgroundBase};
`;

export const ContentWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.header.height}px 1fr ${({ theme }) =>
      theme.sizes.footer.height}px / 1fr;
  padding-left: ${({ theme }) => theme.indents.main.paddingLeftHide}px;
`;
