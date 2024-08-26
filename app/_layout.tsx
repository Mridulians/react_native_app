import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import VideoPlayerScreen from "./VideoPlayerScreen";
import TabTwoScreen from "./(tabs)/explore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      {/* <Stack.Navigator initialRouteName="Home"> */}
       {/* <TabTwoScreen /> */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide the header on all screens
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
