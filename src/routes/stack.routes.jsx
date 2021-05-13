import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import UserRepo from '../components/UserRepo';
import TabRoutes from './tab.routes';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator headerMode={"none"}>
      <Screen name="Home" component={Home} />
      <Screen name="UserRepo" component={UserRepo} />
      <Screen name="Favoritos" component={TabRoutes} />
    </Navigator>
  );
};

export default AppStack;
