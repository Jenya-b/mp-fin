import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppDispatch, useAppSelector } from 'store/store';
import { PrimaryButton, PrimaryInput } from 'styles/components';
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
} from 'modules/pages/Login/Login.styled';
import { Notification } from 'modules/components/Notification/Notification';
import { inputEmailPattern } from 'constants/validInput';
import { notifySelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/alert';

type FormValues = {
  userName: string;
  password: string;
};

export const Signin = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

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

  const onSubmit = handleSubmit((data) => {
    signinUser({
      rememberMe: false,
      returnUrl: null,
      ...data,
    });
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <Notification notifyMessage={notifyMessage} isOpenNotify={isOpenNotify} />
      <LoginForm onSubmit={onSubmit}>
        <TitleForm>Вход в личный кабинет</TitleForm>
        <InputList>
          <Label>
            <PrimaryInput
              {...register('userName', {
                required: 'Поле обязательно к заполнению',
                pattern: inputEmailPattern,
              })}
              placeholder="Email"
            />
            {errors?.userName && (
              <MessageError>{errors?.userName?.message || 'Error'}</MessageError>
            )}
          </Label>
          <Label>
            <PrimaryInput
              {...register('password', {
                required: 'Поле обязательно к заполнению',
              })}
              placeholder="Пароль"
              type="password"
            />
            {errors?.password && (
              <MessageError>{errors?.password?.message || 'Error'}</MessageError>
            )}
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
    </>
  );
};

export default Signin;
