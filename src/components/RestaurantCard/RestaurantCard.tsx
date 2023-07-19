import open from 'assets/open';
import star from 'assets/star';
import { FC, useMemo } from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { styled } from 'styled-components';
import { GoogleRestaurant } from 'types/Restaurant';
import Spacer, { SpacerSize, SpacerVariant } from '../Spacer';
import {
  CardBody,
  CardCover,
  CardIcon,
  CardInfo,
  CardTitle,
  ClosedText,
  InfoItem,
  RestaurantCard,
  StyledImage,
} from './styles';

export const TEST_RESTAURANT: GoogleRestaurant = {
  name: 'Some Restaurant',
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
  photos: [
    'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  ],
  address: '100 some random street',
  isOpenNow: true,
  rating: 4.1,
  isClosedTemporarily: false,
};

type Props = {
  restaurant?: GoogleRestaurant;
};

const RestaurantCardInfo: FC<Props> = ({ restaurant = TEST_RESTAURANT }) => {
  const {
    name,
    photos,
    address,
    rating,
    isClosedTemporarily,
    isOpenNow,
    icon,
  } = restaurant;
  const ratingArray = useMemo(
    () => Array.from(new Array(Math.round(rating))) || [],
    [rating]
  );
  return (
    <RestaurantCard mode="elevated" elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <CardTitle>{name}</CardTitle>
      <CardBody>
        <CardInfo>
          <InfoItem>
            {ratingArray.map((_, idx) => (
              <SvgXml
                key={`${name}-rating-${idx}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </InfoItem>
          <InfoItem>{address}</InfoItem>
        </CardInfo>
        <CardIcon>
          <InfoItem>
            {isClosedTemporarily && <ClosedText>TEMPORARILY CLOSED</ClosedText>}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </InfoItem>
          {icon && (
            <Spacer variant={SpacerVariant.left} size={SpacerSize.md}>
              <InfoItem>
                <StyledImage source={{ uri: icon }} />
              </InfoItem>
            </Spacer>
          )}
        </CardIcon>
      </CardBody>
    </RestaurantCard>
  );
};

export default RestaurantCardInfo;
