import React, { useRef, useEffect, FC, ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';

type Props = {
  duration?: number;
  children: ReactNode;
  style?: ViewStyle;
};

const { View } = Animated;

const FadeInView: FC<Props> = ({ duration = 1500, children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
    </View>
  );
};

export default FadeInView;
