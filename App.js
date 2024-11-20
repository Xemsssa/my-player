import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./app/components/StackNavigation";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <Navigation />
    // <LoginScreen />
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
