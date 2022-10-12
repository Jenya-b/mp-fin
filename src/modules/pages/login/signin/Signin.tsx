import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from '../../../../constants/routerPath';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { useSigninUserMutation } from '../../../../utils/api/authApi';
import {
  InputList,
  LoginForm,
  TitleForm,
  Label,
  Controls,
  LinkWrapper,
  LinkWrapperCenter,
} from '../Login.styled';

export const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { analitics } = routerPath;

  const [signinUser, { isLoading, isError, error, isSuccess }] = useSigninUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(analitics);
    }
  }, [isLoading]);

  const hundleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    signinUser({
      email: email,
      password: password,
      rememberMe: false,
      returnUrl: null,
    });
  };

  return (
    <LoginForm onSubmit={hundleSubmit}>
      <TitleForm>Вход в личный кабинет</TitleForm>
      <InputList>
        <Label>
          <PrimaryInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </Label>
        <Label>
          <PrimaryInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </Label>
      </InputList>
      <LinkWrapper>
        <Link to="reset-pass">Забыли пароль?</Link>
      </LinkWrapper>
      <Controls>
        <PrimaryButton>Продолжить</PrimaryButton>
      </Controls>
      <LinkWrapperCenter>
        <span>Нет аккаутнта?</span> <Link to="registration">Зарегистрируйтесь</Link>
      </LinkWrapperCenter>
    </LoginForm>
  );
};
