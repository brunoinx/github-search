import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListUsers from "../screens/ListUsers";
import FavoritedUsers from "../screens/FavoritedUsers";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "#040404",
        inactiveTintColor: "#898383",
        labelPosition: "below-icon",
        labelStyle: { fontSize: 12 },
        style: {
          alignItems: "center",
          borderTopColor: "#d6d6d6",
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 10,
        },
      }}
    >
      <Screen
        name="Home"
        component={ListUsers}
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
