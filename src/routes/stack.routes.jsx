import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListRepositories from "../screens/ListRepositories";
import TabRoutes from "./tab.routes";

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator headerMode={"none"}>
      <Screen name="Home" component={TabRoutes} />
      <Screen name="ListRepositories" component={ListRepositories} />
    </Navigator>
  );
};

export default AppStack;
