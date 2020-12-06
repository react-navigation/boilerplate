import * as React from 'react';
import { StyleSheet } from 'react-native';
import Background from '../shared/Background';
import Text from '../shared/Text';
import { HomeDrawerScreenProps } from '../types';

export default function Account({ route }: HomeDrawerScreenProps<'Account'>) {
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
