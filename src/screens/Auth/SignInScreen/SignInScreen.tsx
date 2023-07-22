import { FC, useContext, useState } from 'react';
import {
  AccountCover,
  AccountBackground,
  AuthButton,
  AuthTitle,
} from '../AuthMainScreen/styles';
import Spacer, { SpacerSize, SpacerVariant } from 'components/Spacer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackList, TabName } from 'types/Navigation';
import { TextInput } from 'react-native-paper';
import { SignInContainer } from './styles';
import { AuthContext } from 'providers/authProvider';
import ErrorMessage from 'components/ErrorMessage';

type Props = {
  navigation: BottomTabScreenProps<StackList, TabName.main>['navigation'];
};

const SignInMainScreen: FC<Props> = ({ navigation }) => {
  const { error, onSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Spacer size={SpacerSize.sx} variant={SpacerVariant.top}>
            {error && <ErrorMessage message={error} />}
          </Spacer>
          <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
            <AuthButton
              icon="account-lock-open"
              mode="contained"
              onPress={() => onSignIn(email, password)}
            >
              Sign In
            </AuthButton>
          </Spacer>

          <Spacer size={SpacerSize.sx} variant={SpacerVariant.top}>
            <AuthButton
              icon="arrow-left"
              onPress={() => navigation.navigate(TabName.main)}
            >
              Back
            </AuthButton>
          </Spacer>
        </SignInContainer>
      </AccountCover>
    </AccountBackground>
  );
};

export default SignInMainScreen;
