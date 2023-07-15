import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { GoogleRestaurant } from 'types/Restaurant';

type Props = {
  restaurant: GoogleRestaurant;
};

const RestaurantCard: FC<Props> = ({ restaurant }) => {
  const { name, photos } = restaurant;
  return (
    <Card mode="elevated" elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Title title={name} style={styles.title} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { paddingHorizontal: 16, paddingTop: 16 },
  title: { paddingTop: 16, paddingBottom: 8 },
});

export default RestaurantCard;
