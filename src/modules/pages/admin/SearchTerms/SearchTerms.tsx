import { ChangeEvent, FormEvent, useState } from 'react';
import { useDebounce } from 'hooks/debounce';
import { useGetWbQueriesQuery } from 'services';
import { Main, MainTitle, SearchInput } from 'styles/components';
import { SendingData } from './SearchTerms.styled';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fileWBQuerySelector } from 'store/selectors';
import { fetchWBQueryFile } from 'services/api/filesApi';
import { formatDateISOString } from 'utils/formatDate';

export const SearchTerms = () => {
  const [requestFile, setRequestFile] = useState<FormData>();
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
    formData.append('wbFile', file);
    formData.set('Date', dateValue);
    setRequestFile(formData);
  };

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateValue(formatDateISOString(value));
  };

  const sentFile = () => {
    if (!requestFile) return;
    dispatch(fetchWBQueryFile(requestFile)).then(() => refetch());
  };

  return (
    <Main>
      <MainTitle>Поисковые запросы</MainTitle>
      <SendingData>
        <input type="file" onChange={handleChangeFile} />
        <input type="date" onChange={handleChangeDate} />
        <button onClick={sentFile}>ОТПРАВИТЬ</button>
      </SendingData>
      <SearchInput onChange={addSearchValue} />
    </Main>
  );
};
