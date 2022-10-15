import { useState } from 'react';
import { defaultLogo } from '../../../constants/images';
import { Main, MainTitle, PrimaryButton } from '../../../styles/components';
import { SettingsForm, InputsWrapper, PostPicture, Label, SecondaryInput } from './Settings.styled';
import { InputFileWrapp, InputFile, LogoImage, ControlWrapper } from './Settings.styled';

export const SettingsPage = () => {
  const [logoFile, setLogoFile] = useState(defaultLogo);

  const addLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setLogoFile(URL.createObjectURL(files[0]));
    }
  };

  return (
    <Main>
      <MainTitle>Настройки аккаунта</MainTitle>
      <SettingsForm>
        <PostPicture>
          <InputFileWrapp>
            <InputFile type="file" onChange={addLogo} />
            <LogoImage src={logoFile} />
          </InputFileWrapp>
        </PostPicture>
        <InputsWrapper>
          <Label>
            Имя
            <SecondaryInput />
          </Label>
          <Label>
            Фамилия
            <SecondaryInput />
          </Label>
          <Label>
            Email
            <SecondaryInput />
          </Label>
          <Label>
            Телефон
            <SecondaryInput />
          </Label>
          <Label>
            Пароль
            <SecondaryInput type="password" />
          </Label>
          <Label>
            Telegram
            <SecondaryInput />
          </Label>
          <ControlWrapper>
            <PrimaryButton>Сохранить</PrimaryButton>
          </ControlWrapper>
        </InputsWrapper>
      </SettingsForm>
    </Main>
  );
};
