import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Background from '../shared/Background';

export default function Loading() {
  const { colors } = useTheme();

  return (
    <Background style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
