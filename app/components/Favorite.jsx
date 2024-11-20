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
// import Favorite from "../comp÷onents/Favorite";

const Favorite = () => {
  return (
    <Pressable style={styles.favor}>
      <LinearGradient colors={["#33006f", "#ffffff"]}>
        <Pressable style={styles.favorContanier}>
          <AntDesign name="heart" size={24} color={"white"} />
        </Pressable>
      </LinearGradient>
      <Text style={styles.favorText}>Favorite</Text>
    </Pressable>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  favorContanier: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
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
  favorText: {
    color: "white",
  },
});
