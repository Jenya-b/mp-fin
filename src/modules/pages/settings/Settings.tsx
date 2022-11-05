import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { defaultLogo } from '../../../constants/images';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Main, MainTitle, PrimaryButton } from '../../../styles/components';
import { fetchAvatarFile } from '../../../utils/api/filesApi';
import { useChangePersonalDataMutation } from '../../../utils/api/userApi';
import { setUser } from '../../../utils/store/reducers/userSlice';
import { SettingsForm, InputsWrapper, PostPicture, Label, SecondaryInput } from './Settings.styled';
import { InputFileWrapp, InputFile, LogoImage, ControlWrapper } from './Settings.styled';

export const SettingsPage = () => {
  const [logoUrl, setLogoUrl] = useState(defaultLogo);
  const [logoFile, setLogoFile] = useState<FormData>();
  const dispatch = useAppDispatch();
  const [changePersonalData, { isSuccess }] = useChangePersonalDataMutation();
  const { user } = useAppSelector((state) => state.userReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: { name: '', surname: '', phoneNumber: '', email: '', telegram: '' },
  });

  const addLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const formData = new FormData();

    if (!files) return;
    if (files) {
      setLogoUrl(URL.createObjectURL(files[0]));
      formData.append('file', files[0]);
      setLogoFile(formData);
    }
  };

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('surname', user.surname);
      setValue('phoneNumber', user.phoneNumber);
      setValue('email', user.email);
      setValue('telegram', user.telegram);
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(getValues()));
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit((data) => {
    changePersonalData(data);
    if (logoFile) {
      dispatch(fetchAvatarFile(logoFile));
    }
  });

  return (
    <Main>
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
            <SecondaryInput {...register('email')} />
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
