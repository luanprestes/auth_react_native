import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { isEmpty } from 'lodash';
import { colorBase, colorText } from 'Config/assets';
const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colorBase,
    borderBottomColor: colorBase
  },
  headerTintColor: colorText
}

import Welcome from 'Screens/Welcome';
import Login from 'Screens/Login';
import Home from 'Screens/Home';

export default function Routes() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    async function handleAuth() {
      const storageUser = await AsyncStorage.getItem('User');
      setUser(storageUser);
    }
    
    handleAuth();
  })

  return (
    <Stack.Navigator 
      initialRouteName={isEmpty(user) ? "Welcome" : "Home"}
      screenOptions={screenOptions} 
    > 

      {isEmpty(user) ? 
        <>

          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Home' }} 
          /> 

        </> :
        <>
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
        </>

      }

      
    </Stack.Navigator>
  );
}
