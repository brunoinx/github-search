import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import ListUsers from "../components/ListUsers";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: "#040404",
        inactiveTintColor: "#898383",
        labelPosition: "beside-icon",
        style: {
          height: 60,
          alignItems: "center",
          borderTopColor: "#d6d6d6",
          borderTopWidth: 2,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Favoritos"
        component={ListUsers}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
