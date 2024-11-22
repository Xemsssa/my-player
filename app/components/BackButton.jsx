import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  <Pressable
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Ionicons name="arrow-back" size={24} colors="white" />
  </Pressable>;
};

export default BackButton;

const styles = StyleSheet.create({});
