import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import {
  Controls,
  InputList,
  Label,
  LoginForm,
  RegistrationLink,
  ResetPassLink,
  Title,
} from './Signin.styled';

export const Signin = () => (
  <LoginForm>
    <Title>Вход в личный кабинет</Title>
    <InputList>
      <Label>
        <PrimaryInput type="email" placeholder="Email" />
      </Label>
      <Label>
        <PrimaryInput type="pass" placeholder="Пароль" />
      </Label>
    </InputList>
    <ResetPassLink>
      <Link to="reset-pass">Забыли пароль?</Link>
    </ResetPassLink>
    <Controls>
      <PrimaryButton>Продолжить</PrimaryButton>
    </Controls>
    <RegistrationLink>
      <span>Нет аккаутнта?</span> <Link to="registration">Зарегистрируйтесь</Link>
    </RegistrationLink>
  </LoginForm>
);
