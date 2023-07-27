import { FC, useState } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import type { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';
import { Text } from 'react-native-paper';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CreditCardInput } from 'components/CreditCardInput/CreditCardInput';

type Props = {
  navigation: BottomTabScreenProps<StackList, TabName.checkout>['navigation'];
};

const CheckoutScreen: FC<Props> = ({ navigation }) => {
  const [cardInputValue, setCardInputValue] = useState({
    valid: false,
    data: {
      validDate: '',
      cardNumber: '',
      cvv: '',
    },
  });
  return (
    <ScreenStyledSafeAreaView>
      <CreditCardInput setCardInputValue={setCardInputValue} />
    </ScreenStyledSafeAreaView>
  );
};

export default CheckoutScreen;
