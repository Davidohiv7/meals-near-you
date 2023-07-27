import { FC, useContext, useEffect, useState } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { Map } from './styles';
import SearchMap from 'components/SearchMap/SearchMap';
import { View } from 'react-native';
import { LocationContext } from 'providers/locationProvider';
import { RestaurantsContext } from 'providers/restaurantProvider';
import { Marker, Callout } from 'react-native-maps';
import MapCallout from 'components/MapCallout/MapCallout';
import { StackList, TabName } from 'types/Navigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { getCoordinates } from 'utils/location';

type Props = {
  navigation: BottomTabScreenProps<StackList, TabName.map>['navigation'];
};

const MapScreen: FC<Props> = ({ navigation }) => {
  const { location: geometry } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { location, viewport } = geometry || {};

  useEffect(() => {
    setLatDelta(getCoordinates(geometry).latitudeDelta);
  }, [location, viewport]);

  return (
    <ScreenStyledSafeAreaView>
      <View>
        <SearchMap />
        <Map
          region={{
            latitude: location?.lat || 0,
            longitude: location?.lng || 0,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant, idx) => {
            return (
              <Marker
                key={`${idx}-r${restaurant.name}`}
                title={restaurant.name}
                coordinate={getCoordinates(restaurant.geometry)}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate(TabName.restaurantDetail, {
                      restaurant,
                    })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
        </Map>
      </View>
    </ScreenStyledSafeAreaView>
  );
};

export default MapScreen;
