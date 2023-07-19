import { SafeAreaView } from 'react-native';
import { ANDROID_STATUSBAR_HEIGHT } from 'utils/constants';
import { styled } from 'styled-components';

const ScreenStyledSafeAreaView = styled(SafeAreaView)`
  margin-top: ${ANDROID_STATUSBAR_HEIGHT || 0}px;
`;

export default ScreenStyledSafeAreaView;
