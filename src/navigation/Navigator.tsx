import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CreditScreen } from "../screens/CreditScreen";
import { Routes } from "../navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={Routes.CREDIT_SCREEN} component={CreditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
