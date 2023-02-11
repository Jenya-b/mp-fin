import { Outlet } from 'react-router-dom';
import { Footer } from 'modules/components/Footer/Footer';
import { Header } from 'modules/components/Header/Header';
import { Sidebar } from 'modules/components/Sidebar/Sidebar';
import { ContentWrapper, Wrapper } from './Layout.styled';

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
