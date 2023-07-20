import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { colors } from 'style/styledComponentsTheme/colors';
import { TabIcon } from 'types/Navigation';
import { TAB_ICON_OBJECT } from 'utils/constants';

export const createScreenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    size,
    color,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => (
    <Ionicons
      name={TAB_ICON_OBJECT[route.name] || TabIcon.restaurant}
      size={size}
      color={color}
    />
  ),
  tabBarActiveTintColor: colors.brand.primary,
  tabBarInactiveTintColor: colors.brand.secondary,
  headerShown: false,
});
