import { FC } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { Text } from 'react-native';

const SettingsScreen: FC = () => {
  return (
    <ScreenStyledSafeAreaView>
      <Text>Settings</Text>
    </ScreenStyledSafeAreaView>
  );
};

export default SettingsScreen;
