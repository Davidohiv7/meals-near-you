import { FC, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from 'providers/authProvider';
import AppNavigator from './navigators/AppNavigator';
import { AccountNavigator } from './navigators';

const Navigation: FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
