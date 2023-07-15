import { FC } from 'react';
import { Card } from 'react-native-paper';
import { styled } from 'styled-components';
import { GoogleRestaurant } from 'types/Restaurant';

const TEST_RESTAURANT: GoogleRestaurant = {
  name: 'Some Restaurant',
  icon: undefined,
  photos: [
    'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  ],
  address: '100 some random street',
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: false,
};

type Props = {
  restaurant?: GoogleRestaurant;
};

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding-top: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardTitle = styled(Card.Title)`
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RestaurantCardInfo: FC<Props> = ({ restaurant = TEST_RESTAURANT }) => {
  const { name, photos } = restaurant;
  return (
    <RestaurantCard mode="elevated" elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <CardTitle title={name} />
    </RestaurantCard>
  );
};

export default RestaurantCardInfo;
