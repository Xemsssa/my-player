import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import Favorite from "../components/Favorite";

const Header = () => {
  const greetingMessage = () => {
    let greetingMessage = "";
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      greetingMessage = "Good Morning";
    } else if (currentTime < 1) {
      greetingMessage = "Good Afternoon";
    } else {
      greetingMessage = "Good evening";
    }
    return greetingMessage;
  };
  const message = greetingMessage();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.header}>
        <Image
          style={styles.imageProfile}
          source={{
            uri: "https://avatars.githubusercontent.com/u/22170929?v=4&size=40",
          }}
        />
        <Text style={styles.greetingMessage}>{message}</Text>
      </View>
      <MaterialCommunityIcons
        name="lightning-bolt-outline"
        size={24}
        color={"white"}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageProfile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: "cover",
  },

  greetingMessage: {
    marginLeft: 10,
    fontSize: 24,
    color: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});
