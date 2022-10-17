import { Outlet, useNavigate } from 'react-router-dom';
import { routerPath } from '../../../constants/routerPath';
import { useAppSelector } from '../../../hooks/redux';
import { Container, FormWrapper, Logo, LogoWrapper } from './Login.styled';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { analitics } = routerPath;
  const { isActiveUser } = useAppSelector((state) => state.userReducer);

  if (isActiveUser) navigate(analitics);

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
