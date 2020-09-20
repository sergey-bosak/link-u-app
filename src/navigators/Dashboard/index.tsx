import React from 'react';
import Dashboard from "../../screens/Dashboard";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DashboardNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={Dashboard}/>
    </Drawer.Navigator>
  );
}

export default DashboardNavigator;
