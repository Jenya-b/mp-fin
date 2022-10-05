import { Outlet } from 'react-router-dom';
import { Container, FormWrapper, Logo, LogoWrapper } from './Login.styled';

export const LoginPage = () => (
  <Container>
    <FormWrapper>
      <Outlet />
    </FormWrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
  </Container>
);
