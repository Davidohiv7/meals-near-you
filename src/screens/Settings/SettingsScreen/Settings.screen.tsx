import { FC, useContext } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { Avatar, List, Text } from 'react-native-paper';
import { AuthContext } from 'providers/authProvider';
import type { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';
import { colors } from 'style/styledComponentsTheme/colors';
import { AvatarContainer, SettingsItem } from './styles';
import Spacer, { SpacerSize, SpacerVariant } from 'components/Spacer';
import { TouchableOpacity } from 'react-native';

const { Section, Icon } = List;

type Props = StackScreenProps<StackList, TabName.settings>;

const SettingsScreen: FC<Props> = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthContext);
  return (
    <ScreenStyledSafeAreaView>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate(TabName.camera)}>
          <Avatar.Icon size={150} icon="human" />
        </TouchableOpacity>

        <Spacer variant={SpacerVariant.top} size={SpacerSize.lg}>
          <Text variant="bodySmall">{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
      <Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={() => navigation.navigate(TabName.favourites)}
          left={(props) => (
            <Icon {...props} color={colors.ui.primary} icon="heart" />
          )}
        />
        <SettingsItem
          title="Sign Out"
          onPress={() => onSignOut()}
          left={(props) => (
            <List.Icon {...props} color={colors.ui.primary} icon="door" />
          )}
        />
      </Section>
    </ScreenStyledSafeAreaView>
  );
};

export default SettingsScreen;
