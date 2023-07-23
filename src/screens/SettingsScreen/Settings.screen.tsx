import { FC, useContext } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { Button } from 'react-native-paper';
import { AuthContext } from 'providers/authProvider';

const SettingsScreen: FC = () => {
  const { onSignOut } = useContext(AuthContext);
  return (
    <ScreenStyledSafeAreaView>
      <Button mode="contained" onPress={() => onSignOut()}>
        Sign Out
      </Button>
    </ScreenStyledSafeAreaView>
  );
};

export default SettingsScreen;
