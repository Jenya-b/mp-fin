import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';

export const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <ContentWrapper>
        <Header />
        <Outlet />
        <Footer />
      </ContentWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.header.height}px 1fr ${({ theme }) =>
      theme.sizes.footer.height}px / 1fr;
  padding-left: ${({ theme }) => theme.indents.main.paddingLeftHide}px;
`;
