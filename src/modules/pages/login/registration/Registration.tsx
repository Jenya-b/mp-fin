import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from '../../../../constants/routerPath';
import { useAppDispatch } from '../../../../hooks/redux';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { useRegisterUserMutation } from '../../../../utils/api/authApi';
import { setIsActiveUser } from '../../../../utils/store/reducers/userSlice';
import { Loader } from '../../../components/loader/Loader';
import {
  Controls,
  InputList,
  Label,
  LinkWrapper,
  LinkWrapperCenter,
  LoginForm,
  MessageError,
  TitleForm,
} from '../Login.styled';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
  phoneNumber: string;
};

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { analitics } = routerPath;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const [registerUser, { isLoading, isSuccess, error: registerUserError }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser('Пользователь авторизован'));
      navigate(analitics);
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
            {...register('name', {
              required: 'Поле обязательно к заполнению',
            })}
            placeholder="Ваше имя"
          />
          {errors?.name && <MessageError>{errors?.name?.message || 'Error'}</MessageError>}
        </Label>
        <Label>
          <PrimaryInput
            {...register('surname', {
              required: 'Поле обязательно к заполнению',
            })}
            placeholder="Ваша фамилия"
          />
          {errors?.surname && <MessageError>{errors?.surname?.message || 'Error'}</MessageError>}
        </Label>
        <Label>
          <PrimaryInput
            style={registerUserError && { color: 'red' }}
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Не соответствует формату электронной почты',
              },
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
            {...register('phoneNumber', {
              required: 'Поле обязательно к заполнению',
            })}
            placeholder="Телефон"
          />
          {errors?.phoneNumber && (
            <MessageError>{errors?.phoneNumber?.message || 'Error'}</MessageError>
          )}
        </Label>
        <Label>
          <PrimaryInput
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/g,
                message:
                  'Пароль должен состоять из строчных, заглавных латинских букв, цифр и спец символов, не менее 10 символов длиной',
              },
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
