import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppDispatch } from 'store/store';
import { Checkbox, SecondaryButton, SecondaryInput } from 'styles/components';
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
  TelegramButton,
  TelegramImg,
} from 'modules/pages/Login/Login.styled';
import { inputEmailPattern } from 'constants/validInput';
import { telegramIcon } from 'constants/images';
import { FormValuesReg } from 'interfaces/form';

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { home, passwordRecovery, login } = routerPath;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValuesReg>();

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
          <SecondaryInput
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
              <span>Email уже зарегестрирован.</span>{' '}
              <Link to={`../${passwordRecovery}`}>Забыли пароль?</Link>
            </LinkWrapper>
          )}
        </Label>
        <Label>
          <SecondaryInput
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              minLength: 4,
            })}
            type="password"
            placeholder="Создайте пароль"
          />
          {errors?.password && (
            <MessageError>
              {errors?.password?.message || 'Минимальная длина поля 4 символа'}
            </MessageError>
          )}
        </Label>
        <Label>
          <SecondaryInput
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
        <SecondaryButton>Продолжить</SecondaryButton>
        <TelegramButton type="button">
          <TelegramImg src={telegramIcon} /> Telegram
        </TelegramButton>
      </Controls>
      <LinkWrapperCenter>
        <span>Уже есть аккаунт?</span> <Link to={login}> Войти</Link>
      </LinkWrapperCenter>
    </LoginForm>
  );
};

export default Registration;
