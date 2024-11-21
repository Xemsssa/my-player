import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

import { AntDesign, Ionicons } from "@expo/vector-icons";

const SearchBlock = () => {
  const [input, setinput] = useState("");
  return (
    <Pressable style={styles.searchBlock}>
      <Pressable style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color={"white"} />
        <TextInput
          value={input}
          onChangeText={(text) => {
            setinput(text);
          }}
          placeholder="Find in Liked song"
          placeholderTextColor={"white"}
        />
      </Pressable>
      <Text style={styles.sort}>Sort</Text>
    </Pressable>
  );
};

export default SearchBlock;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#42275a",
    borderRadius: 3,
    marginHorizontal: 10,
  },
  searchBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#42275a",
    marginHorizontal: 10,
    gap: 10,
  },
  sort: { padding: 10, color: "white" },
});
