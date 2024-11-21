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
import Header from "../components/Header";
import Types from "../components/Types";
import Favorite from "../components/Favorite";
import MusicStyle from "../components/MusicStyle";
import TopArtist from "../components/RecentlyPlayed";
import RecentlyPlayed from "../components/RecentlyPlayed";
import ArtistContainer from "../components/ArtistContainer";
import RecentlyPlayedCart from "../components/RecentlyPlayedCart";

const HomeScreen = () => {
  const [userProfile, setUserProfile] = useState();
  const [recentlyPlayed, setrecentlyPlayed] = useState([]);
  const [topArtist, settopArtist] = useState([]);
  // const navigation = useNavigation();

  const getProfile = async () => {
    const accessToken = await AsyncStorage.getItem("token");

    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Autorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setUserProfile(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  const getRecentlyPlayedSong = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/player/recetly-played/limit=4",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const tracks = response.data.items;
      setrecentlyPlayed(tracks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecentlyPlayedSong();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.recentlyPlayedContainer}>
        <Image
          style={styles.recentlyPlayedImage}
          source={{ uri: item.track.album.images[0].url }}
        />
        <Text numberOfLines={2} style={styles.recentlyPlayedText}>
          {item.track.name}
        </Text>
      </Pressable>
    );
  };
  useEffect(() => {
    const getTopItems = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("token");
        if (!accessToken) {
          console.log("Access token not found");
          return;
        }
        const type = "artist";
        const response = await axios.get(
          `https://api.spotify.com/v1/me/top/${type}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        settopArtist(response.data.items);
      } catch (error) {}
    };

    getTopItems();
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
      <SafeAreaView>
        <ScrollView>
          <Text>HomeScreen</Text>
          <Header />
          <Types />
          <View style={styles.container}>
            <Favorite
              onPress={() => {
                navigation.navigate("Liked");
              }}
            />
            <MusicStyle />
          </View>
          {/* <RecentlyPlayed
            recentlyPlayed={recentlyPlayed}
            renderItem={renderItem}
          /> */}
          <TopArtist />
          <ArtistContainer />
          <View>
            <FlatList
              data={recentlyPlayed}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                <RecentlyPlayedCart item={item} key={index} />;
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  favorContanier: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentlyPlayedContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: "#282828",
    borderRadius: 4,
    elevation: 3,
  },

  recentlyPlayedImage: {
    height: 55,
    width: 55,
  },
  recentlyPlayedText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
});
