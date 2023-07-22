import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { styled } from 'styled-components';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
  padding-top: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const CardBody = styled(View)`
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  display: flex;
  flex-direction: row;
`;

export const CardInfo = styled(View)`
  flex-direction: column;
  flex: 1;
`;

export const CardIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${(props) => props.theme.space[3]};
`;

export const InfoItem = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  display: flex;
  align-items: center;
`;

export const ClosedText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.error};
`;

export const StyledImage = styled(Image)`
  height: ${(props) => props.theme.sizes[1]};
  width: ${(props) => props.theme.sizes[1]};
`;
