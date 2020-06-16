import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_KEYS } from '../../util/constants';
import MainTabNavigator from './MainTabNavigator';
import {} from '../../screens';

const AuthStack = createStackNavigator();
export default function AppStackScreen({ navigation, route }) {
  return (
    <AuthStack.Navigator initialRouteName={SCREEN_KEYS.MAIN_STACK}>
      <AuthStack.Screen name={SCREEN_KEYS.MAIN_STACK} component={MainTabNavigator} />
    </AuthStack.Navigator>
  );
}
