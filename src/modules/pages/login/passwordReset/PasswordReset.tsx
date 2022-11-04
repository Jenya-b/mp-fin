import { useForm } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';
import { PrimaryInput, PrimaryButton } from '../../../../styles/components';
import { usePasswordResetMutation } from '../../../../utils/api/authApi';
import {
  InputList,
  Label,
  LoginForm,
  MessageError,
  TitleForm,
  Controls,
  LinkWrapperCenter,
} from '../Login.styled';
import { Loader } from '../../../components/loader/Loader';
import { InfoMessage } from '../InfoMessage';

type FormValues = {
  passNew: string;
};

export const PasswordReset = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get('userEmail') ?? '';
  const userToken = searchParams.get('token') ?? '';
  const [resetPass, { isLoading, isSuccess, isError }] = usePasswordResetMutation();

  const onSubmit = handleSubmit((data) => {
    resetPass({
      userToken: userToken,
      userEmail: userEmail,
      ...data,
    });
  });

  return (
    <>
      {isLoading && <Loader />}
      <LoginForm onSubmit={onSubmit}>
        {isSuccess ? (
          <InfoMessage
            title="Успех!"
            desc="Вы сменили пароль. Для продолжения, перейдите к форме входа"
            routPath="/login"
          />
        ) : isError ? (
          <InfoMessage
            title="Произошла ошибка!"
            desc="Попроуйте повторно отправить данные для восстановления на почту"
            routPath="/login/recovery-pass"
          />
        ) : (
          <>
            <TitleForm>Смена пароля</TitleForm>
            <InputList>
              <Label>
                <PrimaryInput value={userEmail} disabled />
              </Label>
              <Label>
                <PrimaryInput
                  {...register('passNew', {
                    required: 'Поле обязательно к заполнению',
                    pattern: {
                      value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/g,
                      message:
                        'Пароль должен состоять из строчных, заглавных латинских букв, цифр и спец символов, не менее 10 символов длиной',
                    },
                  })}
                  placeholder="Новый пароль"
                  type="password"
                />
                {errors?.passNew && (
                  <MessageError>{errors?.passNew?.message || 'Error'}</MessageError>
                )}
              </Label>
            </InputList>
            <Controls>
              <PrimaryButton>Продолжить</PrimaryButton>
            </Controls>
            <LinkWrapperCenter>
              <span>Перейти к форме</span> {''}
              <Link to="/login/registration">регистрации</Link> {''}
              <span>или</span> {''}
              <Link to="/login">входа</Link>
            </LinkWrapperCenter>
          </>
        )}
      </LoginForm>
    </>
  );
};