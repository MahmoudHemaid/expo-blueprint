import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

const RootStack = createStackNavigator();
export default function RootStackScreen({ isLogged }) {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLogged ? (
        <RootStack.Screen name={'App'} component={AppStackNavigator} />
      ) : (
        <RootStack.Screen name={'Auth'} component={AuthStackNavigator} />
      )}
    </RootStack.Navigator>
  );
}
