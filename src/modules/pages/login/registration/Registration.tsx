import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { useRegisterUserMutation } from '../../../../utils/services/authApi';
import {
  Controls,
  InputList,
  Label,
  LinkWrapperCenter,
  LoginForm,
  TitleForm,
} from '../Login.styled';

export const Registration = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firsname, setFirsname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [registerUser, { isLoading, isSuccess, error, isError }] = useRegisterUserMutation();

  const hundleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: firsname,
      surname: lastname,
      phoneNumber: phoneNumber,
    });
  };

  return (
    <LoginForm onSubmit={hundleSubmit}>
      <TitleForm>Регистрация</TitleForm>
      <InputList>
        <Label>
          <PrimaryInput
            placeholder="Ваше имя"
            value={firsname}
            onChange={(event) => setFirsname(event.currentTarget.value)}
          />
        </Label>
        <Label>
          <PrimaryInput
            placeholder="Ваша фамилия"
            value={lastname}
            onChange={(event) => setLastname(event.currentTarget.value)}
          />
        </Label>
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
            placeholder="Телефон"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.currentTarget.value)}
          />
        </Label>
        <Label>
          <PrimaryInput
            type="password"
            placeholder="Создайте пароль"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </Label>
        <Label>
          <PrimaryInput
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.currentTarget.value)}
          />
        </Label>
      </InputList>
      <Controls>
        <PrimaryButton>Продолжить</PrimaryButton>
      </Controls>
      <LinkWrapperCenter>
        <span>Уже есть аккаунт?</span> <Link to="/login"> Войти</Link>
      </LinkWrapperCenter>
    </LoginForm>
  );
};
