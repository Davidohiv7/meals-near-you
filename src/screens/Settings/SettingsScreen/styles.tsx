import { View } from 'react-native';
import { List } from 'react-native-paper';
import { styled } from 'styled-components';

const { Item } = List;

export const SettingsItem = styled(Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled(View)`
  align-items: center;
  margin-top: ${(props) => props.theme.space[4]};
`;
