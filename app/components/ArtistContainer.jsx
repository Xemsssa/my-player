import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArtistCard from "./ArtistCard";

const ArtistContainer = () => {
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
