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
import FavouriteButton from 'components/Favourite/FavouriteButton';

type Props = {
  restaurant?: GoogleRestaurant;
};

const RestaurantCardInfo: FC<Props> = ({ restaurant }) => {
  const {
    name,
    photos,
    address,
    rating,
    isClosedTemporarily,
    isOpenNow,
    icon,
    geometry,
  } = restaurant || {};
  const ratingArray = useMemo(
    () => (rating ? Array.from(new Array(Math.round(rating) || 0)) : []),
    [rating]
  );
  return (
    <RestaurantCard mode="elevated" elevation={5}>
      <View>
        <FavouriteButton restaurant={restaurant} />
        <CardCover source={{ uri: photos?.[0] }} />
      </View>
      <CardTitle>{name}</CardTitle>
      <CardBody>
        <CardInfo>
          <InfoItem>
            {ratingArray?.map((_, idx) => (
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
