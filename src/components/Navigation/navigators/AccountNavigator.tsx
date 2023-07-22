import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthMainScreen, SignInScreen, SignUpScreen } from 'screens';
import { TabName } from 'types/Navigation';

const { Navigator, Screen } = createStackNavigator();

const AccountNavigator = () => (
  <Navigator screenOptions={() => ({ headerShown: false })}>
    <Screen name={TabName.main} component={AuthMainScreen} />
    <Screen name={TabName.signIn} component={SignInScreen} />
    <Screen name={TabName.signUp} component={SignUpScreen} />
  </Navigator>
);

export default AccountNavigator;
