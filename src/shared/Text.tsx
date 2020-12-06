import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Text as NativeText, TextProps } from 'react-native';

export default function Text({
  style,
  ...rest
}: TextProps & { children: React.ReactNode }) {
  const { colors } = useTheme();

  return <NativeText style={[{ color: colors.text }, style]} {...rest} />;
}
