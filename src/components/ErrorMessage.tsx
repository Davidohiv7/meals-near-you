import { Text } from 'react-native-paper';
import Spacer, { SpacerSize, SpacerVariant } from './Spacer';
import { FC } from 'react';

type Props = {
  message: string;
  variant?: SpacerVariant;
  size?: SpacerSize;
};

const ErrorMessage: FC<Props> = ({
  message,
  variant = SpacerVariant.top,
  size = SpacerSize.sx,
}) => {
  return (
    <Spacer size={size} variant={variant}>
      <Text style={{ color: 'red', textAlign: 'center' }}>{message}</Text>
    </Spacer>
  );
};

export default ErrorMessage;
