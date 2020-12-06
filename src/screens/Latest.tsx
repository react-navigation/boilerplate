import * as React from 'react';
import { StyleSheet } from 'react-native';
import Background from '../shared/Background';
import Text from '../shared/Text';
import { FeedTabScreenProps } from '../types';

export default function Latest({ route }: FeedTabScreenProps<'Latest'>) {
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
