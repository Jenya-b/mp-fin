import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { InputList, LoginForm, TitleForm, Label, Controls, LinkWrapper } from '../Login.styled';
import { ResetPassLink } from './Signin.styled';

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
    <ResetPassLink>
      <Link to="reset-pass">Забыли пароль?</Link>
    </ResetPassLink>
    <Controls>
      <PrimaryButton>Продолжить</PrimaryButton>
    </Controls>
    <LinkWrapper>
      <span>Нет аккаутнта?</span> <Link to="registration">Зарегистрируйтесь</Link>
    </LinkWrapper>
  </LoginForm>
);
