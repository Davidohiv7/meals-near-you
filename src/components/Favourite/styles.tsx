import styled from 'styled-components/native';
import { Text, TouchableOpacity, View } from 'react-native';

export const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 9;
`;

export const FavouritesWrapper = styled(View)`
  padding: 0 ${(props) => props.theme.space[3]};
`;

export const FavouritesTitle = styled(Text)`
  padding: ${(props) => props.theme.space[2]} 0;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
