import * as React from 'react';
import { StyleSheet } from 'react-native';
import Background from '../shared/Background';
import Text from '../shared/Text';
import { RootStackScreenProps } from '../types';

export default function NotFound({ route }: RootStackScreenProps<'NotFound'>) {
  return (
    <Background style={styles.container}>
      <Text>{route.name}</Text>
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
