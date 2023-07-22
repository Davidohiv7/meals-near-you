import { FC, useContext } from 'react';
import {
  AccountCover,
  AccountBackground,
  AuthButton,
  AuthTitle,
} from '../AuthMainScreen/styles';
import Spacer, { SpacerSize, SpacerVariant } from 'components/Spacer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackList, TabName } from 'types/Navigation';
import { AuthContext } from 'providers/authProvider';
import ErrorMessage from 'components/ErrorMessage';
import { SignInContainer } from '../SignInScreen/styles';

type Props = {
  navigation: BottomTabScreenProps<StackList, TabName.main>['navigation'];
};

const SignUpScreen: FC<Props> = ({ navigation }) => {
  const { error, onSignIn } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountCover>
        <AuthTitle>Meals Near You</AuthTitle>
        <SignInContainer>
          <Spacer size={SpacerSize.sx} variant={SpacerVariant.top}>
            {error && <ErrorMessage message={error} />}
          </Spacer>
          <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
            <AuthButton icon="account-plus" mode="contained" onPress={() => {}}>
              Sign Up
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

export default SignUpScreen;
