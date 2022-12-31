import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FILE_AVATAR_TYPE, MAX_SIZE } from 'constants/files';
import { defaultLogo } from 'constants/images';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Main, MainTitle, PrimaryButton } from 'styles/components';
import { fetchAvatarFile } from 'services/api/filesApi';
import { useChangePersonalDataMutation, useLazyGetUserQuery } from 'services';
import { setUser } from 'store/reducers/userSlice';
import { Loader } from 'modules/components/Loader/Loader';
import {
  SettingsForm,
  InputsWrapper,
  PostPicture,
  Label,
  SecondaryInput,
  InputFileWrapp,
  InputFile,
  LogoImage,
  ControlWrapper,
} from 'modules/pages/Settings/Settings.styled';
import { inputEmailPattern } from 'constants/validInput';
import { MessageError } from 'modules/pages/Login/Login.styled';
import { avatarSelector, userSelector } from 'store/selectors';

export const SettingsPage = () => {
  const [logoUrl, setLogoUrl] = useState(defaultLogo);
  const [logoFile, setLogoFile] = useState<FormData>();
  const dispatch = useAppDispatch();
  const [changePersonalData, { isSuccess: isSuccessChangeData, isLoading: isLoadingChangeData }] =
    useChangePersonalDataMutation();
  const [fetchUser, { data: dataUser, isSuccess: isSuccessFetchUser }] = useLazyGetUserQuery();
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

  const onSubmit = handleSubmit((data) => {
    changePersonalData(data);
    if (logoFile) {
      dispatch(fetchAvatarFile(logoFile));
    }
  });

  return (
    <Main>
      {(isLoadingUploadFile || isLoadingChangeData) && <Loader />}
      <MainTitle>Настройки аккаунта</MainTitle>
      <SettingsForm onSubmit={onSubmit}>
        <PostPicture>
          <InputFileWrapp>
            <InputFile type="file" onChange={addLogo} />
            <LogoImage src={logoUrl} />
          </InputFileWrapp>
        </PostPicture>
        <InputsWrapper>
          <Label>
            Имя
            <SecondaryInput {...register('name')} />
          </Label>
          <Label>
            Фамилия
            <SecondaryInput {...register('surname')} />
          </Label>
          <Label>
            Email
            <SecondaryInput
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                pattern: inputEmailPattern,
              })}
            />
            {errors?.email && <MessageError>{errors?.email?.message || 'Error'}</MessageError>}
          </Label>
          <Label>
            Телефон
            <SecondaryInput {...register('phoneNumber')} />
          </Label>
          <Label>
            Telegram
            <SecondaryInput {...register('telegram')} />
          </Label>
          <ControlWrapper>
            <PrimaryButton>Сохранить</PrimaryButton>
          </ControlWrapper>
        </InputsWrapper>
      </SettingsForm>
    </Main>
  );
};

export default SettingsPage;
