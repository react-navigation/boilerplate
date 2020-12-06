import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Feed from './Feed';
import Account from './Account';
import { HomeDrawerParamList } from '../types';
import AuthContext from '../AuthContext';

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

export default function Home() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: true }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Sign out"
            icon={({ color, size }) => (
              <Feather name="log-out" color={color} size={size} />
            )}
            onPress={signOut}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "What's new",
          drawerIcon: ({ color, size }) => (
            <Feather name="activity" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          title: 'My account',
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
