import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const RecentlyPlayed = ({ recentlyPlayed, renderItem }) => {
  return (
    <View>
      <FlatList
        data={recentlyPlayed}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default RecentlyPlayed;

const styles = StyleSheet.create({});
