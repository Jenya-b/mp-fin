import { useEffect, MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppDispatch, useAppSelector } from 'store/store';
import { SecondaryButton, SecondaryInput } from 'styles/components';
import { useSigninUserMutation } from 'services';
import { setIsActiveUser } from 'store/reducers/userSlice';
import { Loader } from 'modules/components/Loader/Loader';
import {
  InputList,
  LoginForm,
  TitleForm,
  Label,
  Controls,
  LinkWrapper,
  LinkWrapperCenter,
  MessageError,
  TelegramButton,
  TelegramImg,
} from 'modules/pages/Login/Login.styled';
import { Notification } from 'modules/components/Notification/Notification';
import { notifySelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/alert';
import { FormValuesSignin } from 'interfaces/form';
import { telegramIcon } from 'constants/images';
import { telegramBotUrl } from 'services/baseUrl';

export const Signin = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValuesSignin>({
    values: {
      userName: '',
      password: '',
    },
  });

  const { home, passwordRecovery, registration } = routerPath;
  const [signinUser, { isLoading, isSuccess, isError }] = useSigninUserMutation();
  const navigate = useNavigate();
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser(true));
      navigate(home);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(openNotify(alertMessage.errorSignin));
    }
  }, [isError]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const userName = searchParams.get('tel');
    const password = searchParams.get('pass');

    if (!!(userName && password)) {
      signinUser({
        rememberMe: false,
        userName: `+${userName.trim()}`,
        password,
      });
    }

    searchParams.delete('tel');
    searchParams.delete('pass');
    window.history.pushState(null, document.title, url);
  }, []);

  const onSubmit = handleSubmit((data) => {
    signinUser({
      rememberMe: false,
      ...data,
    });
  });

  const signinByTelegram = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(telegramBotUrl);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Notification notifyMessage={notifyMessage} isOpenNotify={isOpenNotify} />
      <LoginForm onSubmit={onSubmit}>
        <TitleForm>Вход в личный кабинет</TitleForm>
        <InputList>
          <Label>
            <SecondaryInput
              {...register('userName', {
                required: 'Поле обязательно к заполнению',
              })}
              placeholder="Номер телефона или Email"
            />
            {errors?.userName && <MessageError>{errors.userName?.message || 'Error'}</MessageError>}
          </Label>
          <Label>
            <SecondaryInput
              {...register('password', {
                required: 'Поле обязательно к заполнению',
              })}
              placeholder="Пароль"
              type="password"
            />
            {errors?.password && <MessageError>{errors.password?.message || 'Error'}</MessageError>}
          </Label>
        </InputList>
        <LinkWrapper>
          <Link to={passwordRecovery}>Забыли пароль?</Link>
        </LinkWrapper>
        <Controls>
          <SecondaryButton data-testid="submit-form">Продолжить</SecondaryButton>
          <TelegramButton type="button" onClick={signinByTelegram}>
            <TelegramImg src={telegramIcon} /> Telegram
          </TelegramButton>
        </Controls>
        <LinkWrapperCenter>
          <span>Нет аккаутнта?</span> <Link to={registration}>Зарегистрируйтесь</Link>
        </LinkWrapperCenter>
      </LoginForm>
    </>
  );
};

export default Signin;
