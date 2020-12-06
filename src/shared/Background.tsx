import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

export default function Background({
  style,
  ...rest
}: ViewProps & { children: React.ReactNode }) {
  const { colors } = useTheme();

  return (
    <View style={[{ backgroundColor: colors.background }, style]} {...rest} />
  );
}
