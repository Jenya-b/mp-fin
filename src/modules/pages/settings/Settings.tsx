import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { defaultLogo } from '../../../constants/images';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Main, MainTitle, PrimaryButton } from '../../../styles/components';
import { useChangePersonalDataMutation } from '../../../utils/api/userApi';
import { setUser } from '../../../utils/store/reducers/userSlice';
import { SettingsForm, InputsWrapper, PostPicture, Label, SecondaryInput } from './Settings.styled';
import { InputFileWrapp, InputFile, LogoImage, ControlWrapper } from './Settings.styled';

export const SettingsPage = () => {
  const [logoFile, setLogoFile] = useState(defaultLogo);
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
    if (files) {
      setLogoFile(URL.createObjectURL(files[0]));
    }
  };

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('surname', user.surname);
      setValue('phoneNumber', user.phoneNumber);
      setValue('email', user.email);
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(getValues()));
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit((data) => {
    changePersonalData(data);
  });

  return (
    <Main>
      <MainTitle>Настройки аккаунта</MainTitle>
      <SettingsForm onSubmit={onSubmit}>
        <PostPicture>
          <InputFileWrapp>
            <InputFile type="file" onChange={addLogo} />
            <LogoImage src={logoFile} />
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
