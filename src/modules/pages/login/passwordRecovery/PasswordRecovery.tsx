import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/store';
import { SecondaryButton, SecondaryInput } from 'styles/components';
import { usePasswordRecoveryMutation } from 'services';
import { openNotify } from 'store/reducers/notifySlice';
import { Loader } from 'modules/components/Loader/Loader';
import { Notification } from 'modules/components/Notification/Notification';
import {
  LoginForm,
  TitleForm,
  InputList,
  Label,
  Controls,
  LinkWrapperCenter,
  MessageError,
} from 'modules/pages/Login/Login.styled';
import { inputEmailPattern } from 'constants/validInput';
import { notifySelector } from 'store/selectors';
import { routerPath } from 'constants/routerPath';
import { ErrorType, FormValuesPassRecovery } from 'interfaces/form';

export const PasswordRecovery = () => {
  const { login } = routerPath;
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValuesPassRecovery>();

  const [recoveryPass, { isLoading, isSuccess, isError, data, error }] =
    usePasswordRecoveryMutation();

  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);

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
            <SecondaryInput
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
          <SecondaryButton>Продолжить</SecondaryButton>
        </Controls>
        <LinkWrapperCenter>
          <span>Уже есть аккаунт?</span> <Link to={login}> Войти</Link>
        </LinkWrapperCenter>
      </LoginForm>
    </>
  );
};

export default PasswordRecovery;
