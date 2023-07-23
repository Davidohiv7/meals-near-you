import { View } from 'react-native';
import { styled } from 'styled-components';

export const Header = styled(View)`
  align-items: flex-start;
  padding: 0 ${(props) => props.theme.space[2]};
`;

export const NoFavouritesArea = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
