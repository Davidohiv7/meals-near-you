import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantDetailScreen, RestaurantScreen } from 'screens';
import { StackList, TabName } from 'types/Navigation';

const { Navigator, Screen } = createStackNavigator<StackList>();

const RestaurantNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <Screen name={TabName.restaurant} component={RestaurantScreen} />
      <Screen
        name={TabName.restaurantDetail}
        component={RestaurantDetailScreen}
      />
    </Navigator>
  );
};

export default RestaurantNavigator;
