import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import AntDesign, { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const OrderIcon = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Pressable style={styles.arrow}>
        {/* <AntDesign name="arrowdown" size={24} color="white" /> */}
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="cross-bolnisi"
          size={24}
          color="#1d8954"
        />
        <Pressable style={styles.play}>
          <Entypo name="controller-play" size={24} color="white" />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default OrderIcon;

const styles = StyleSheet.create({
  arrow: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#1d8954",
    justifyContent: "center",
  },

  play: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1d8954",
    justifyContent: "center",
    alignItems: "center",
  },
});
