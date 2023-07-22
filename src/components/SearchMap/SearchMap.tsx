import { FC, useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchBarContainer } from './styles';
import { LocationContext } from 'providers/locationProvider';
import { Ionicons } from '@expo/vector-icons';

const SearchMap: FC<{}> = () => {
  const { keyword, search } = useContext(LocationContext);
  const [inputKeyword, setInputKeyword] = useState<string>(keyword);
  useEffect(() => setInputKeyword(keyword), [keyword]);
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
        icon={(props) => <Ionicons name="map" {...props} />}
      />
    </SearchBarContainer>
  );
};

export default SearchMap;
