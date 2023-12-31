import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchBarContainer } from './styles';
import { LocationContext } from 'providers/locationProvider';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'style/styledComponentsTheme/colors';

type Props = {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
};

const Search: FC<Props> = ({ setIsToggled, isToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [inputKeyword, setInputKeyword] = useState<string>(keyword);
  useEffect(() => setInputKeyword(keyword), [keyword]);
  return (
    <SearchBarContainer>
      <Searchbar
        onIconPress={() => setIsToggled((prev) => !prev)}
        value={inputKeyword}
        elevation={2}
        onChangeText={(input: string) => setInputKeyword(input)}
        placeholder="Search"
        onSubmitEditing={() => {
          search(inputKeyword);
        }}
        icon={(props) => (
          <Ionicons
            name="heart"
            {...props}
            color={isToggled ? 'red' : colors.text.primary}
          />
        )}
      />
    </SearchBarContainer>
  );
};

export default Search;
