import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import FavoritedUsers from "../screens/FavoritedUsers";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: "#040404",
        inactiveTintColor: "#898383",
        labelPosition: "below-icon",
        style: {
          height: 64,
          alignItems: "center",
          justifyContent: 'center',
          borderTopColor: "#d6d6d6",
          borderTopWidth: 2,
          paddingBottom: 10
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
        component={FavoritedUsers}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
