import { Outlet } from 'react-router-dom';
import { Container, FormWrapper, Logo, LogoWrapper } from './Login.styled';

export const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <Outlet />
      </FormWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Container>
  );
};
