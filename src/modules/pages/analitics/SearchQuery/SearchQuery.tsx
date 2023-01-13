import { FormEvent, useState } from 'react';
import { SearchBlock, Subtitle, Label, InputSearch } from './SearchQuery.styled';

export const SearchQueryAnalytics = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const addSearchValue = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  return (
    <>
      <SearchBlock>
        <Subtitle>Получить данные</Subtitle>
        <Label>
          <InputSearch onChange={addSearchValue} />
        </Label>
      </SearchBlock>
    </>
  );
};
