import React from 'react';
import Background from "./components/Background";
import RootNavigator from "./navigators";

const App = () => {
  return (
    <Background>
      <RootNavigator/>
    </Background>
  );
}

const RootApp = () => {
  return (
    <App/>
  );
}

export default RootApp;
