import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import {
  InputList,
  LoginForm,
  TitleForm,
  Label,
  Controls,
  LinkWrapper,
  LinkWrapperCenter,
} from '../Login.styled';

export const Signin = () => (
  <LoginForm>
    <TitleForm>Вход в личный кабинет</TitleForm>
    <InputList>
      <Label>
        <PrimaryInput type="email" placeholder="Email" />
      </Label>
      <Label>
        <PrimaryInput type="pass" placeholder="Пароль" />
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
