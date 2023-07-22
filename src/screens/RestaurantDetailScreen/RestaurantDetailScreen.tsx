import { StackScreenProps } from '@react-navigation/stack';
import RestaurantCardInfo from 'components/Restaurant/RestaurantCard/RestaurantCard';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { FC, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { StackList, TabName } from 'types/Navigation';

type Props = StackScreenProps<StackList, TabName.restaurantDetail>;

const { Accordion, Icon, Item } = List;

const RestaurantDetailScreen: FC<Props> = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <ScreenStyledSafeAreaView>
      <RestaurantCardInfo restaurant={route.params.restaurant} />
      <ScrollView>
        <Accordion
          title="Breakfast"
          left={(props) => <Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded((prev) => !prev)}
        >
          <Item title="Eggs Benedict" />
          <Item title="Classic Breakfast" />
        </Accordion>
        <Accordion
          title="Lunch"
          left={(props) => <Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded((prev) => !prev)}
        >
          <Item title="Burger w/ Fries" />
          <Item title="Steak Sandwich" />
          <Item title="Mushroom Soup" />
        </Accordion>
        <Accordion
          title="Dinner"
          left={(props) => <Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded((prev) => !prev)}
        >
          <Item title="Spaghetti Bolognese" />
          <Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Item title="Steak Frites" />
        </Accordion>
        <Accordion
          title="Drinks"
          left={(props) => <Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded((prev) => !prev)}
        >
          <Item title="Coffee" />
          <Item title="Tea" />
          <Item title="Modelo" />
          <Item title="Coke" />
          <Item title="Fanta" />
        </Accordion>
      </ScrollView>
    </ScreenStyledSafeAreaView>
  );
};

export default RestaurantDetailScreen;
