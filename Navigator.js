import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import KittenList from './screens/KittenList';
import Kitten from './screens/Kitten';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={KittenList}
        options={{ title: 'Kitten List' }}
      />
      <Stack.Screen
        name="Kitten"
        component={Kitten}
        options={{ title: 'Kitten Image' }}
      />
    </Stack.Navigator>
  );
}
