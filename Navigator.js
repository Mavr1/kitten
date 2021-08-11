import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import KittenList from './screens/KittenList';
import Kitten from './screens/Kitten';
import { getKittensOperation } from './redux/kittensOperations';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKittensOperation());
  }, []);

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
