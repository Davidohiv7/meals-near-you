import { FC } from 'react';
import {
  AccountCover,
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthTitle,
  AnimationWrapper,
} from '../AuthMainScreen/styles';
import Spacer, { SpacerSize, SpacerVariant } from 'components/Spacer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackList, TabName } from 'types/Navigation';
import AnimatedLottieView from 'lottie-react-native';
import json from '../../../../assets/watermelon.json';

type Props = {
  navigation: BottomTabScreenProps<StackList, TabName.main>['navigation'];
};

const AuthMainScreen: FC<Props> = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover>
        <AnimationWrapper>
          <AnimatedLottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={json}
          />
        </AnimationWrapper>
        <AuthTitle>Meals Near You</AuthTitle>
        <AccountContainer>
          <AuthButton
            icon="account-lock-open"
            mode="contained"
            onPress={() => navigation.navigate(TabName.signIn)}
          >
            Sign In
          </AuthButton>
          <Spacer size={SpacerSize.lg} variant={SpacerVariant.top}>
            <AuthButton
              icon="account-plus"
              mode="contained"
              onPress={() => navigation.navigate(TabName.signUp)}
            >
              Sign Up
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};

export default AuthMainScreen;
