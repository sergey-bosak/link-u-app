import React from 'react';
import Dashboard from "../../screens/Dashboard";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Sandbox from "../../screens/Sandbox";

const Drawer = createDrawerNavigator();

const DashboardNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={Dashboard}/>
      <Drawer.Screen name="Sandbox" component={Sandbox} />
    </Drawer.Navigator>
  );
}

export default DashboardNavigator;
