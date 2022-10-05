import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { Controls, InputList, Label, LinkWrapper, LoginForm, TitleForm } from '../Login.styled';

export const Registration = () => {
  return (
    <LoginForm>
      <TitleForm>Регистрация</TitleForm>
      <InputList>
        <Label>
          <PrimaryInput placeholder="Ваше имя" />
        </Label>
        <Label>
          <PrimaryInput type="email" placeholder="Email" />
        </Label>
        <Label>
          <PrimaryInput type="tel" placeholder="Телефон" />
        </Label>
        <Label>
          <PrimaryInput type="pass" placeholder="Создайте пароль" />
        </Label>
        <Label>
          <PrimaryInput type="pass" placeholder="Повторите пароль" />
        </Label>
      </InputList>
      <Controls>
        <PrimaryButton>Продолжить</PrimaryButton>
      </Controls>
      <LinkWrapper>
        <span>Уже есть аккаунт?</span> <Link to="/login"> Войти</Link>
      </LinkWrapper>
    </LoginForm>
  );
};
