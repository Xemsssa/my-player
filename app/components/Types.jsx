import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Types = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable style={styles.typeOf}>
        <Text style={styles.typeOfText}>Music</Text>
      </Pressable>
      <Pressable style={styles.typeOf}>
        <Text style={styles.typeOfText}>Podcast</Text>
      </Pressable>
    </View>
  );
};

export default Types;

const styles = StyleSheet.create({
  typeOf: {
    backgroundColor: "#282828",
    padding: 10,
    borderRadius: 30,
  },
  typeOfText: {
    fontSize: 15,
    color: "white",
  },
});
