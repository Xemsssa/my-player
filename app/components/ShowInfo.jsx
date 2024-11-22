import { StyleSheet, Text, View, I } from "react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AntDesign, { Entypo } from "@expo/vector-icons";
import { BottomModal, ModalContent } from "react-native-modals";
import { Image } from "react-native";

const ShowInfo = () => {
  return (
    <View>
      <Image
        style={styles.modalContentImage}
        source={{ url: currentTrack?.album?.image[0].url }}
      />

      <View style={styles.modalContentText}>
        <View>
          <Text style={styles.modalContentTrackName}>
            {currentTrack?.track?.name}
          </Text>
          <Text>{currentTrack?.track?.artists[0].name}</Text>
        </View>
        <AntDesign name="heart" size={24} color="white" />
      </View>
    </View>
  );
};

export default ShowInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  modalContent: {
    height: "100%",
    width: "100%",
    backgroundColor: "#5072a7",
  },

  modalContentPressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContentImage: {
    width: "100%",
    height: 330,
    borderRadius: 4,
  },
  modalContentText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modalContentTrackName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  modalContentArtistName: {
    color: "#d3d3d3",
    marginTop: 4,
  },

  progressTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
