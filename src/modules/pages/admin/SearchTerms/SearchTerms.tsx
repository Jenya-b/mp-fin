import { ChangeEvent, FormEvent, useState } from 'react';
import { useDebounce } from 'hooks/debounce';
import { useGetWbQueriesQuery } from 'services';
import { Main, MainTitle, SecondaryButton } from 'styles/components';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fileWBQuerySelector } from 'store/selectors';
import { fetchWBQueryFile } from 'services/api/filesApi';
import { formatDateISOString } from 'utils/formatDate';
import { Form, Label, InputAdminPanel, Container } from '../Admin.styled';
import {
  InputFile,
  InputFileBtn,
  InputFileName,
  Subtitle,
  SearchBlock,
} from './SearchTerms.styled';

export const SearchTerms = () => {
  const [requestFile, setRequestFile] = useState<FormData>();
  const [fileName, setFileName] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>('');
  const debouncedSearch = useDebounce(searchValue);
  const dispatch = useAppDispatch();

  const { data, refetch } = useGetWbQueriesQuery(debouncedSearch);
  const {
    isLoading: isLoadingUpload,
    isError: isErrorUploadFile,
    isSuccess: isSuccessUploadFile,
  } = useAppSelector(fileWBQuerySelector);

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const formData = new FormData();

    if (!files || !files.length) return;
    const file = files[0];
    setFileName(file.name);
    console.log(file.name);

    formData.append('wbFile', file);
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
    dispatch(fetchWBQueryFile(requestFile)).then(() => refetch());
  };

  return (
    <Main>
      <MainTitle>Поисковые запросы</MainTitle>
      <Container>
        <Subtitle>Обновить запросы</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            <InputFileName></InputFileName>
            <InputFile type="file" onChange={handleChangeFile} />
            <InputFileBtn>{fileName || 'Выберите файл'}</InputFileBtn>
          </Label>
          <Label>
            <InputAdminPanel type="date" onChange={handleChangeDate} />
          </Label>
          <SecondaryButton>Отправить</SecondaryButton>
        </Form>
        <SearchBlock>
          <Subtitle>Получить данные</Subtitle>
          <Label>
            <InputAdminPanel onChange={addSearchValue} />
          </Label>
        </SearchBlock>
      </Container>
    </Main>
  );
};
