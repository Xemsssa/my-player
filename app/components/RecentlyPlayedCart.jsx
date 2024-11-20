import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const RecentlyPlayedCart = () => {
  return (
    <Pressable>
      <Text>RecentlyPlayedCart</Text>
      <Image
        style={styles.recentlyPlayedImage}
        source={{ uri: item.track.album.images[0].url }}
      />
      <Text numberOfLines={1} style={styles.recentlyPlayedText}>{item.track?.name}</Text>
    </Pressable>
  );
};

export default RecentlyPlayedCart;

const styles = StyleSheet.create({
  recentlyPlayedImage: {
    width: 130,
    height: 130,
    borderRadius: 5,
  },
  recentlyPlayedText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
});
