import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import {
  LoginForm,
  TitleForm,
  InputList,
  Label,
  Controls,
  LinkWrapperCenter,
} from '../Login.styled';

export const ResetPass = () => {
  return (
    <LoginForm>
      <TitleForm>Забыли пароль?</TitleForm>
      <InputList>
        <Label>
          <PrimaryInput type="email" placeholder="Email" />
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
