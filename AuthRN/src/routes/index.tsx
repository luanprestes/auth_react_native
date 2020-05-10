import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colorBase, colorText } from '../config/assets';
const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colorBase,
    borderBottomColor: colorBase
  },
  headerTintColor: colorText
}

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'

export default function Routes() {
  return (
    <Stack.Navigator 
      initialRouteName="Welcome" 
      screenOptions={screenOptions} 
    > 

      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ title: 'Bem Vindo' }} 
      />

      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: 'Fazer login' }} 
      />
      
    </Stack.Navigator>
  );
}
