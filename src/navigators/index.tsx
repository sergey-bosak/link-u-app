import React from 'react';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './Dashboard';
import Store from '../screens/Store';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Dashboard" component={DashboardNavigator} />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ gestureEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
