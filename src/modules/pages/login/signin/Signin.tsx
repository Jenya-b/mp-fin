import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../../components/button/Button';
import { PrimaryInput } from '../../../components/input/Input';
import {
  Controls,
  InputList,
  LoginForm,
  RegistrationLink,
  ResetPassLink,
  Title,
} from './Signin.styled';

export const Signin = () => (
  <LoginForm>
    <Title>Вход в личный кабинет</Title>
    <InputList>
      <PrimaryInput type="email" placeholder="Email" />
      <PrimaryInput type="pass" placeholder="Пароль" />
    </InputList>
    <ResetPassLink>
      <Link to="reset-pass">Забыли пароль?</Link>
    </ResetPassLink>
    <Controls>
      <PrimaryButton text="Продолжить" />
    </Controls>
    <RegistrationLink>
      <span>Нет аккаутнта?</span> <Link to="registration">Зарегистрируйтесь</Link>
    </RegistrationLink>
  </LoginForm>
);
