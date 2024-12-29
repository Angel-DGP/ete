import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SesionScreen } from "./app/screens/SesionScreen";
import { HomeScreen } from "./app/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const AppNavTop = () => {
  return (
    <Stack.Navigator backgroundColor="black">
      <Stack.Screen
        name="HomeNav"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SesionNav"
        component={SesionScreen}
        options={{
          title: "",
          headerBackVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer backgroundColor="white">
      <StatusBar style="light" />
      <AppNavTop></AppNavTop>
    </NavigationContainer>
  );
}
