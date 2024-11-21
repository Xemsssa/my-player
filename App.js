import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./app/components/StackNavigation";
import LoginScreen from "./app/screens/LoginScreen";
import LikedSongScreen from "./app/screens/LikedSongScreen";
import { PlayerContext } from "./PlayerContext";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <PlayerContext>
      // <Navigation />
      <ModalPortal />
      // <LoginScreen />
      <LikedSongScreen />
    </PlayerContext>
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
