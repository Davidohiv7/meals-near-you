import open from 'assets/open';
import star from 'assets/star';
import { FC, useMemo } from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { styled } from 'styled-components';
import { GoogleRestaurant } from 'types/Restaurant';

const TEST_RESTAURANT: GoogleRestaurant = {
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

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding-top: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const CardBody = styled(View)`
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  display: flex;
  flex-direction: row;
`;

const CardInfo = styled(View)`
  flex-direction: column;
  flex: 1;
`;

const CardIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${(props) => props.theme.space[3]};
`;

const InfoItem = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.space[2]};
`;

const ClosedText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.error};
`;

const StyledImage = styled(Image)`
  height: ${(props) => props.theme.sizes[1]};
  width: ${(props) => props.theme.sizes[1]};
`;

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
            <InfoItem>
              <StyledImage source={{ uri: icon }} />
            </InfoItem>
          )}
        </CardIcon>
      </CardBody>
    </RestaurantCard>
  );
};

export default RestaurantCardInfo;
