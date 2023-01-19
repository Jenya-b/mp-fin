import { ChangeEvent, FormEvent, useState } from 'react';
import { Main, MainTitle, SecondaryButton } from 'styles/components';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fileWBQuerySelector } from 'store/selectors';
import { fetchWBQueryFile } from 'services/api/filesApi';
import { formatDateISOString } from 'utils/formatDate';
import { Form, Label, InputAdminPanel, Container } from '../Admin.styled';
import { InputFile, InputFileBtn, InputFileName, Subtitle } from './SearchTerms.styled';
import { Loader } from 'modules/components/Loader/Loader';

export const SearchTerms = () => {
  const [requestFile, setRequestFile] = useState<FormData>();
  const [fileName, setFileName] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const { isLoading, isError, isSuccess } = useAppSelector(fileWBQuerySelector);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const formData = new FormData();

    if (!files || !files.length) return;
    const file = files[0];
    setFileName(file.name);
    formData.set('wbFile', file);
    formData.set('Date', dateValue);
    setRequestFile(formData);
  };

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateValue(formatDateISOString(value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!requestFile) return;
    dispatch(fetchWBQueryFile(requestFile));
  };

  return (
    <Main>
      {isLoading && <Loader />}
      <MainTitle>Поисковые запросы</MainTitle>
      <Container>
        <Subtitle>Обновить запросы</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            <InputAdminPanel type="date" onChange={handleChangeDate} />
          </Label>
          <Label>
            <InputFileName></InputFileName>
            <InputFile type="file" onChange={handleChangeFile} disabled={!dateValue} />
            <InputFileBtn>{fileName || 'Выберите файл'}</InputFileBtn>
          </Label>
          <SecondaryButton>Отправить</SecondaryButton>
        </Form>
      </Container>
    </Main>
  );
};
