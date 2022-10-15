import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from '../../styles/components';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';

export const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Header />
        <Outlet />
        <Footer />
      </Main>
    </Wrapper>
  );
};
