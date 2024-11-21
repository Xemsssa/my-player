import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons";
import Entypo from "@expo/vector-icons";

const SongItem = ({ item }) => {
  return (
    <Pressable style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item?.track?.album?.images[0].url }}
      />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.textName}>
          {item?.track?.name}
        </Text>
        <Text style={styles.textName}>{item?.track?.artists[0].name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Antdesign name="heart" size={24} color="#1d8954" />
        <Entypo name="dots-three-vertical" size={24} color="#c0c0c0" />
      </View>
    </Pressable>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textName: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
