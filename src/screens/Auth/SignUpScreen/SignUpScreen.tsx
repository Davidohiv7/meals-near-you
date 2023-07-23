import { FC, useContext, useState } from 'react';
import {
  AccountCover,
  AccountBackground,
  AuthButton,
  AuthTitle,
  Loading,
} from '../AuthMainScreen/styles';
import Spacer, { SpacerSize, SpacerVariant } from 'components/Spacer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackList, TabName } from 'types/Navigation';
import { AuthContext } from 'providers/authProvider';
import ErrorMessage from 'components/ErrorMessage';
import { SignInContainer } from '../SignInScreen/styles';
import { TextInput } from 'react-native-paper';

type Props = {
  navigation: BottomTabScreenProps<StackList, TabName.main>['navigation'];
};

const SignUpScreen: FC<Props> = ({ navigation }) => {
  const { isLoading, signUpError: error, onSignUp } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  return (
    <AccountBackground>
      <AccountCover>
        <AuthTitle>Meals Near You</AuthTitle>
        <SignInContainer>
          <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
            <TextInput
              mode="outlined"
              label="Email"
              inputMode="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Spacer>
          <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
            <TextInput
              mode="outlined"
              label="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </Spacer>
          <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
            <TextInput
              mode="outlined"
              label="Repeat password"
              value={repeatedPassword}
              secureTextEntry={true}
              onChangeText={(text) => setRepeatedPassword(text)}
            />
          </Spacer>
          <Spacer size={SpacerSize.sx} variant={SpacerVariant.top}>
            {error && <ErrorMessage message={error} />}
          </Spacer>
          {isLoading ? (
            <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
              <Loading />
            </Spacer>
          ) : (
            <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
              <AuthButton
                icon="account-plus"
                mode="contained"
                onPress={() => onSignUp(email, password, repeatedPassword)}
              >
                Sign Up
              </AuthButton>
            </Spacer>
          )}
          <Spacer size={SpacerSize.sx} variant={SpacerVariant.top}>
            <AuthButton
              icon="arrow-left"
              onPress={() => navigation.navigate(TabName.main)}
              disabled={isLoading}
            >
              Back
            </AuthButton>
          </Spacer>
        </SignInContainer>
      </AccountCover>
    </AccountBackground>
  );
};

export default SignUpScreen;
