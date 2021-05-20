import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserRepo from "../screens/UserRepo";
import TabRoutes from "./tab.routes";

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator headerMode={"none"}>
      <Screen name="Home" component={TabRoutes} />
      <Screen name="UserRepo" component={UserRepo} />
    </Navigator>
  );
};

export default AppStack;
