import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ArtistCard from "./ArtistCard";

const ArtistContainer = () => {
  const TopArtist = [
    {}
  ]
  return (
    <View>
      <ScrollView>
        {TopArtist.map((item, index) => (
          <ArtistCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ArtistContainer;

const styles = StyleSheet.create({});
