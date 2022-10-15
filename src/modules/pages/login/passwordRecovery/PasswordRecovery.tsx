import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PrimaryButton, PrimaryInput } from '../../../../styles/components';
import { usePasswordRecoveryMutation } from '../../../../utils/api/authApi';
import { Loader } from '../../../components/loader/Loader';
import {
  LoginForm,
  TitleForm,
  InputList,
  Label,
  Controls,
  LinkWrapperCenter,
  MessageError,
} from '../Login.styled';

type FormValues = {
  email: string;
};

export const PasswordRecovery = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const [recoveryPass, { isLoading, isSuccess, error: recoveryPassError, data }] =
    usePasswordRecoveryMutation();

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);

  const onSubmit = handleSubmit((data) => {
    recoveryPass(data);
  });

  if (isLoading) return <Loader />;

  return (
    <LoginForm onSubmit={onSubmit}>
      <TitleForm>Забыли пароль?</TitleForm>
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
          {recoveryPassError && <MessageError>Пользователь с такой почтой не найден</MessageError>}
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
