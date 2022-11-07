import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from '../../../../constants/routerPath';
import { useAppDispatch } from '../../../../hooks/redux';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { useSigninUserMutation } from '../../../../services';
import { setIsActiveUser } from '../../../../store/reducers/userSlice';
import { Loader } from '../../../components/loader/Loader';
import {
  InputList,
  LoginForm,
  TitleForm,
  Label,
  Controls,
  LinkWrapper,
  LinkWrapperCenter,
  MessageError,
} from '../Login.styled';

type FormValues = {
  email: string;
  password: string;
};

export const Signin = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const { analitics, passwordRecovery, registration } = routerPath;

  const [signinUser, { isLoading, isSuccess }] = useSigninUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser(true));
      navigate(analitics);
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit((data) => {
    signinUser({
      rememberMe: false,
      returnUrl: null,
      ...data,
    });
  });

  if (isLoading) return <Loader />;

  return (
    <LoginForm onSubmit={onSubmit}>
      <TitleForm>Вход в личный кабинет</TitleForm>
      <InputList>
        <Label>
          <PrimaryInput
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
        </Label>
        <Label>
          <PrimaryInput
            {...register('password', {
              required: 'Поле обязательно к заполнению',
            })}
            placeholder="Пароль"
            type="password"
          />
          {errors?.password && <MessageError>{errors?.password?.message || 'Error'}</MessageError>}
        </Label>
      </InputList>
      <LinkWrapper>
        <Link to={passwordRecovery}>Забыли пароль?</Link>
      </LinkWrapper>
      <Controls>
        <PrimaryButton>Продолжить</PrimaryButton>
      </Controls>
      <LinkWrapperCenter>
        <span>Нет аккаутнта?</span> <Link to={registration}>Зарегистрируйтесь</Link>
      </LinkWrapperCenter>
    </LoginForm>
  );
};
