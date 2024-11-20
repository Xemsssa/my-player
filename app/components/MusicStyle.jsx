import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MusicStyle = () => {
  return (
    <View style={styles.favor}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/22170929?v=4&size=40",
        }}
        height={55}
        width={55}
      />
      <View style={styles.artist}>
        <Text style={styles.favorText}>HipHop</Text>
      </View>
    </View>
  );
};

export default MusicStyle;

const styles = StyleSheet.create({
  favorText: {
    color: "white",
  },
  artist: {},
  favor: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: "#202020",
    borderRadius: 4,
    elevation: 3,
  },
});
