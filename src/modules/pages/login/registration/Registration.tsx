import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppDispatch } from 'hooks/redux';
import { Checkbox, PrimaryButton, PrimaryInput } from 'styles/components';
import { useRegisterUserMutation } from 'services';
import { setIsActiveUser } from 'store/reducers/userSlice';
import { Loader } from 'modules/components/Loader/Loader';
import {
  Controls,
  InputList,
  Label,
  LinkWrapper,
  LinkWrapperCenter,
  LoginForm,
  MessageError,
  TitleForm,
} from 'modules/pages/Login/Login.styled';
import { inputEmailPattern, inputPassPattern } from 'constants/validInput';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  isAgreeProcessing: boolean;
};

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { home } = routerPath;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const [registerUser, { isLoading, isSuccess, error: registerUserError }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser(true));
      navigate(home);
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit((data) => {
    registerUser(data);
  });

  if (isLoading) return <Loader />;

  return (
    <LoginForm onSubmit={onSubmit}>
      <TitleForm>Регистрация</TitleForm>
      <InputList>
        <Label>
          <PrimaryInput
            style={registerUserError && { color: 'red' }}
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              pattern: inputEmailPattern,
            })}
            placeholder="Email"
          />
          {errors?.email && <MessageError>{errors?.email?.message || 'Error'}</MessageError>}
          {registerUserError && (
            <LinkWrapper>
              <span>Email уже зарегестрирован.</span> <Link to="reset-pass">Забыли пароль?</Link>
            </LinkWrapper>
          )}
        </Label>
        <Label>
          <PrimaryInput
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              pattern: inputPassPattern,
            })}
            type="password"
            placeholder="Создайте пароль"
          />
          {errors?.password && <MessageError>{errors?.password?.message}</MessageError>}
        </Label>
        <Label>
          <PrimaryInput
            {...register('confirmPassword')}
            type="password"
            placeholder="Повторите пароль"
          />
        </Label>
        <Label>
          <Checkbox {...register('isAgreeProcessing', { required: true })} type="checkbox" />{' '}
          Согласен на обработку персональных данных
          {errors?.isAgreeProcessing && <MessageError>Вы должны дать согласие</MessageError>}
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

export default Registration;
