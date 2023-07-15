import { StyleSheet, View, SafeAreaView } from 'react-native';
import { COLORS } from 'style/colors';
import { ANDROID_STATUSBAR_HEIGHT } from 'utils/constants';
import { Searchbar } from 'react-native-paper';
import { FC, useState } from 'react';
import { RestaurantInfo } from 'components/RestaurantInfo';

const RestaurantScreen: FC = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.search}>
        <Searchbar
          value={search}
          elevation={2}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: ANDROID_STATUSBAR_HEIGHT,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});

export default RestaurantScreen;
