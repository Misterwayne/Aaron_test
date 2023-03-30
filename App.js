//This is an example of online Emulator by https://aboutreact.com
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './components/Login';
import TicketScreen from "./components/TicketScreen"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Ticket"
          component={TicketScreen}
          />
        </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;