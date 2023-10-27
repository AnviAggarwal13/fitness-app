import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/Welcome";
import Dashboard from "./app/screens/Dashboard";
import Home from "./app/screens/Home";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style= {styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome Screen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
