import React from 'react';
import SignIn from '../screens/SignIn';
import Dashboard from "../screens/Dashboard";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DashboardNavigator from "./Dashboard";

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
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Dashboard" component={DashboardNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
