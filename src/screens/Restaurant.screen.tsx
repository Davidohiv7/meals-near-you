import { View, SafeAreaView } from 'react-native';
import { ANDROID_STATUSBAR_HEIGHT } from 'utils/constants';
import { Searchbar } from 'react-native-paper';
import { FC, useState } from 'react';
import RestaurantCardInfo from 'components/RestaurantCard';
import { styled } from 'styled-components';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${ANDROID_STATUSBAR_HEIGHT || 0}px;
`;

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen: FC = () => {
  const [search, setSearch] = useState('');
  return (
    <StyledSafeAreaView>
      <SearchBarContainer>
        <Searchbar
          value={search}
          elevation={2}
          onChangeText={(text) => setSearch(text)}
        />
      </SearchBarContainer>
      <ListContainer>
        <RestaurantCardInfo />
      </ListContainer>
    </StyledSafeAreaView>
  );
};

export default RestaurantScreen;
