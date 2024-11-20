import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ArtistCard = ({ item }) => {
  return (
    <View>
      <Text>ArtistCard</Text>
      <Image
        style={{ width: 130, height: 130 }}
        source={{ url: item.images[0].url }}
      />
      <Text>{item.name}</Text>
    </View>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
});
