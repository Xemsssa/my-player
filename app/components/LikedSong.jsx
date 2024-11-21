import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LikedSong = () => {
  return (
    <View style={styles.LikedSongContainer}>
      <Text style={[styles.likedText, styles.text]}>Liked Songs</Text>
      <Text style={[styles.likedText, styles.smallText]}>430 Songs</Text>
    </View>
  );
};

export default LikedSong;

const styles = StyleSheet.create({
  likedText: {
    color: "white",
  },
  LikedSongContainer: {
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
