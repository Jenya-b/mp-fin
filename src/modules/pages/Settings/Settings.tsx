import { useState, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { FILE_AVATAR_TYPE, MAX_SIZE } from 'constants/files';
import { defaultLogo } from 'constants/images';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Main, MainTitle } from 'styles/components';
import { fetchAvatarFile } from 'services/api/filesApi';
import {
  useAddWbTokenMutation,
  useChangePersonalDataMutation,
  useEditWbTokenMutation,
  useIsTokenSavedQuery,
  useLazyGetUserQuery,
} from 'services';
import { setUser } from 'store/reducers/userSlice';
import { Loader } from 'modules/components/Loader/Loader';
import {
  Label,
  Input,
  InputFileWrapp,
  InputFile,
  LogoImage,
  Wrapper,
  Form,
  PersonalDataButton,
  AdditionalButton,
} from 'modules/pages/Settings/Settings.styled';
import { inputEmailPattern } from 'constants/validInput';
import { MessageError } from 'modules/pages/Login/Login.styled';
import { avatarSelector, userSelector } from 'store/selectors';

export const SettingsPage = () => {
  const [logoUrl, setLogoUrl] = useState(defaultLogo);
  const [logoFile, setLogoFile] = useState<FormData>();
  const [wbToken, setWbToken] = useState('');
  const dispatch = useAppDispatch();
  const [changePersonalData, { isSuccess: isSuccessChangeData, isLoading: isLoadingChangeData }] =
    useChangePersonalDataMutation();
  const [fetchUser, { data: dataUser, isSuccess: isSuccessFetchUser }] = useLazyGetUserQuery();
  const [fetchAddToken, { isLoading: isLoadingAddToken, isSuccess: isSuccessAddToken }] =
    useAddWbTokenMutation();
  const [fetchEditToken, { isLoading: isLoadingEditToken }] = useEditWbTokenMutation();
  const { data: isToken, isLoading: isLoadingGetToken, refetch } = useIsTokenSavedQuery(null);
  const { user } = useAppSelector(userSelector);
  const { isLoading: isLoadingUploadFile, isSuccess: isSuccessUploadFile } =
    useAppSelector(avatarSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { name: '', surname: '', phoneNumber: '', email: '', telegram: '' },
  });

  useEffect(() => {
    if (isSuccessAddToken) refetch();
  }, [isSuccessAddToken]);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('surname', user.surname);
      setValue('phoneNumber', user.phoneNumber);
      setValue('email', user.email);
      setValue('telegram', user.telegram);
    }
    if (user && user.avatar) {
      setLogoUrl(user.avatar);
    }
  }, [setValue, user]);

  useEffect(() => {
    if (isSuccessChangeData || isSuccessUploadFile) {
      fetchUser(null);
    }
  }, [fetchUser, isSuccessChangeData, isSuccessUploadFile]);

  useEffect(() => {
    if (isSuccessFetchUser && dataUser) {
      dispatch(setUser(dataUser));
    }
  }, [dataUser, dispatch, isSuccessFetchUser]);

  const onSubmitPersonalData = handleSubmit((data) => {
    changePersonalData(data);
    if (logoFile) {
      dispatch(fetchAvatarFile(logoFile));
    }
  });

  const addLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const formData = new FormData();

    if (!files || !files.length) return;
    const file = files[0];

    if (file.size > MAX_SIZE) return;
    if (!FILE_AVATAR_TYPE.includes(file.type)) return;

    setLogoUrl(URL.createObjectURL(file));
    formData.append('file', files[0]);
    setLogoFile(formData);
  };

  const onSubmitWbToken = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isToken ? fetchEditToken(wbToken) : fetchAddToken(wbToken);
  };

  const handleChangeWbToken = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setWbToken(value);
  };

  return (
    <Main>
      {(isLoadingUploadFile ||
        isLoadingChangeData ||
        isLoadingAddToken ||
        isLoadingGetToken ||
        isLoadingEditToken) && <Loader />}
      <MainTitle>Настройки аккаунта</MainTitle>
      <Wrapper>
        <InputFileWrapp>
          <InputFile type="file" onChange={addLogo} />
          <LogoImage src={logoUrl} />
        </InputFileWrapp>
        <Form onSubmit={onSubmitPersonalData}>
          <Label>
            Имя
            <Input {...register('name')} />
          </Label>
          <Label>
            Фамилия
            <Input {...register('surname')} />
          </Label>
          <Label>
            Email
            <Input
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                pattern: inputEmailPattern,
              })}
            />
            {errors?.email && <MessageError>{errors?.email?.message || 'Error'}</MessageError>}
          </Label>
          <Label>
            Телефон
            <Input {...register('phoneNumber')} />
          </Label>
          <Label>
            Telegram
            <Input {...register('telegram')} />
          </Label>
          <PersonalDataButton>Сохранить</PersonalDataButton>
        </Form>
        <Form onSubmit={onSubmitWbToken}>
          <Label>
            Токет Wildberries
            <Input value={wbToken} onChange={handleChangeWbToken} />
          </Label>
          <AdditionalButton>{isToken ? 'Изменить токен' : 'Добавить токен'}</AdditionalButton>
        </Form>
      </Wrapper>
    </Main>
  );
};

export default SettingsPage;
