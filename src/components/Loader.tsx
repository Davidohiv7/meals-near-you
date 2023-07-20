import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from 'style/styledComponentsTheme/colors';
import { styled } from 'styled-components';

const Loading = styled(ActivityIndicator)`
  margin-top: 270px;
`;

const LoadingScreen = () => (
  <View>
    <Loading size={50} animating={true} color={colors.ui.secondary} />
  </View>
);

export default LoadingScreen;
