import { useEffect, MouseEvent } from 'react';
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
import { inputPhonePattern } from 'constants/validInput';
import { telegramIcon } from 'constants/images';
import { FormValuesReg } from 'interfaces/form';
import { telegramBotUrl } from 'services/baseUrl';

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { home, login } = routerPath;

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
    const phoneNumber = data.phoneNumber.replace(/\+/gi, '');

    registerUser({
      phoneNumber,
      password: data.password,
      confirmPassword: data.confirmPassword,
      isAgreeProcessing: data.isAgreeProcessing,
    });
  });

  const registrationViaTelegram = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(telegramBotUrl);
  };

  if (isLoading) return <Loader />;

  return (
    <LoginForm onSubmit={onSubmit}>
      <TitleForm>Регистрация</TitleForm>
      <InputList>
        <Label>
          <SecondaryInput
            style={registerUserError && { color: 'red' }}
            {...register('phoneNumber', {
              required: 'Поле обязательно к заполнению',
              pattern: inputPhonePattern,
            })}
            placeholder="Номер телефона"
          />
          {errors?.phoneNumber && (
            <MessageError>{errors.phoneNumber?.message || 'Error'}</MessageError>
          )}
          {registerUserError && (
            <LinkWrapper>
              <span>Номер телефона уже зарегестрирован.</span>{' '}
              {/* //! Функционал смены пароля в разработке */}
              <Link to={'#'}>Забыли пароль?</Link>
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
              {errors.password?.message || 'Минимальная длина поля 4 символа'}
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
        <TelegramButton type="button" onClick={registrationViaTelegram}>
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
