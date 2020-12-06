import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeedTabParamList } from '../types';
import Popular from './Popular';
import Latest from './Latest';

const Tab = createMaterialTopTabNavigator<FeedTabParamList>();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="Latest" component={Latest} />
    </Tab.Navigator>
  );
}
