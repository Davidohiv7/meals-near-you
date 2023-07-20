import { FC, useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchBarContainer } from './styles';
import { LocationContext } from 'providers/locationProvider';

const Search: FC<{}> = () => {
  const { keyword, search } = useContext(LocationContext);
  const [inputKeyword, setInputKeyword] = useState<string>(keyword);
  return (
    <SearchBarContainer>
      <Searchbar
        value={inputKeyword}
        elevation={2}
        onChangeText={(input: string) => setInputKeyword(input)}
        placeholder="Search"
        onSubmitEditing={() => {
          search(inputKeyword);
        }}
      />
    </SearchBarContainer>
  );
};

export default Search;
