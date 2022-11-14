import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { PrimaryButton, PrimaryInput } from 'styles/components';
import { usePasswordRecoveryMutation } from 'services';
import { openNotify } from 'store/reducers/notifySlice';
import { Loader } from 'modules/components/loader/Loader';
import { Notification } from 'modules/components/notification/Notification';
import {
  LoginForm,
  TitleForm,
  InputList,
  Label,
  Controls,
  LinkWrapperCenter,
  MessageError,
} from 'modules/pages/login/Login.styled';
import { inputEmailPattern } from 'constants/validInput';

type FormValues = {
  email: string;
};

type ErrorType = {
  message: string;
};

export const PasswordRecovery = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const [recoveryPass, { isLoading, isSuccess, isError, data, error }] =
    usePasswordRecoveryMutation();

  const { isOpenNotify, notifyMessage } = useAppSelector((state) => state.notifyReducer);

  useEffect(() => {
    if (isSuccess) {
      reset();
      dispatch(
        openNotify({
          message: data?.message ?? 'Успех',
          type: 'success',
        })
      );
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error && 'status' in error) {
        const errMsg: ErrorType = error.data as ErrorType;
        dispatch(
          openNotify({
            message: errMsg.message ?? 'Ошибка',
            type: 'error',
          })
        );
      }
    }
  }, [isError]);

  const onSubmit = handleSubmit((data) => {
    recoveryPass(data);
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <Notification notifyMessage={notifyMessage} isOpenNotify={isOpenNotify} />
      <LoginForm onSubmit={onSubmit}>
        <TitleForm>Забыли пароль?</TitleForm>
        <InputList>
          <Label>
            <PrimaryInput
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                pattern: inputEmailPattern,
              })}
              placeholder="Email"
            />
            {errors?.email && <MessageError>{errors?.email?.message || 'Error'}</MessageError>}
          </Label>
        </InputList>
        <Controls>
          <PrimaryButton>Продолжить</PrimaryButton>
        </Controls>
        <LinkWrapperCenter>
          <span>Уже есть аккаунт?</span> <Link to="/login"> Войти</Link>
        </LinkWrapperCenter>
      </LoginForm>
    </>
  );
};

export default PasswordRecovery;
