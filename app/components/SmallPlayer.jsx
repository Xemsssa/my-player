import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AntDesign, { Entypo } from "@expo/vector-icons";
import { BottomModal, ModalContent } from "react-native-modals";
import { Image } from "react-native";
import ProgressBar from "./ProgressBar";

const SmallPlayer = (props) => {
  {
    currentTrack;
  } = props;
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{ width: 40, height: 40 }}
          source={{ uri: currentTrack?.track?.album?.images[0].url }}
        />
        <Text numberOfLines={1}>
          {currentTrack?.track?.name} *{currentTrack?.track?.artists[0].name}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="heart" size={24} color="white" />
        <Pressable>
          <AntDesign name="pausecircle" size={24} color="white" />
        </Pressable>
      </View>

      <BottomModal
        visible={modalVisible}
        onHardwareBackPress={() => {
          setModalVisible(false);
        }}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
      >
        <ModalContent style={styles.modalContent}>
          <View>
            <Pressable style={styles.modalContentPressable}>
              <AntDesign
                onPress={() => {
                  setModalVisible(false);
                }}
                name="down"
                size={24}
                color="white"
              />
              <Text>{currentTrack?.track?.name}</Text>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </Pressable>

            <View style={{ height: 90 }} />
            <ShowInfo />
            <ProgressBar />
            <PlayerControls isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default SmallPlayer;

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
