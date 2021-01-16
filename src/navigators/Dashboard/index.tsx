import React from 'react';
import Dashboard from '../../screens/Dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sandbox from '../../screens/Sandbox';
import SignIn from '../../screens/SignIn';

const Drawer = createDrawerNavigator();

const DashboardNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Sandbox" component={Sandbox} />
      <Drawer.Screen name="Sign In" component={SignIn} />
    </Drawer.Navigator>
  );
};

export default DashboardNavigator;
