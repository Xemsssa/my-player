import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import { SearchBar } from "react-native-screens";
import SearchBlock from "../components/SearchBlock";
import LikedSong from "../components/LikedSong";
import OrderIcon from "../components/OrderIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SongItem from "../components/SongItem";

const LikedSongScreen = () => {
  // const navigation = useNavigation();
  const [input, setinput] = useState("");
  const [savedtracks, setSavedTracks] = useState([]);

  const { currentTrack, setCurrentTrack } = useContext(Player);

  const [modalVisible, setModalVisible] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);

  const [progress, setProgress] = useState(null);
  const [currentTime, setcurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const getSavedTracks = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    const response = await fetch(
      "https://api.spotify.com/v1/me/tracks?offset=0&limit=50",
      {
        headers: {
          Autorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: 50,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the tracks");
    }
    const data = await response.json();
    setSavedTracks(data.items);
    console.log();
  };

  useEffect(() => {
    getSavedTracks();
  }, []);

  const playTrack = async () => {
    if (savedtracks.length > 0) {
      setCurrentTrack(savedtracks[0]);
    }
    await play(savedtracks[0]);
  };

  const play = async (nextTrack) => {
    const preview_url = nextTrack?.track?.preview_url;
    try {
      await Audio.setAudioModeSync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: false,
      });

      const { sound, status } = await Audio.Sound.createAsync(
        {
          uri: preview_url,
        },
        { shouldPlay: true, isLooping: false },
        onPlaybackStatusUpdate
      );
      setCurrentSong(sound);
      onPlaybackStatusUpdate(status);
      await sound.playAsync();
    } catch (error) {}
  };
  const onPlaybackStatusUpdate = async () => {
    if (status.isLoaded && status.iPlaying) {
      const progress = status.positionMillis / status.durationMillis;
      setProgress(progress);
      setcurrentTime(progress.positionMillis);
      setTotalDuration(status.durationMillis);
    }
  };

  return (
    <>
      <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
        {/* <SafeAreaView> */}
        <ScrollView style={{ marginTop: 40 }}>
          <BackButton />
          <SearchBlock />
          <View style={{ height: 40 }} />
          <LikedSong />
          <OrderIcon />
          <FlatList
            data={savedtracks}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              <SongItem item={item} />;
            }}
          />
        </ScrollView>
        {/* </SafeAreaView> */}
      </LinearGradient>
      {currentTrack && (
        <Pressable
          style={styles.container}
          onPress={setModalVisible(!modalVisible)}
        >
          <SmallPlayer
            currentTrack={currentTrack}
            modalVisible={modalVisible}
          />
        </Pressable>
      )}
    </>
  );
};

export default LikedSongScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d8954",
    width: "90%",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    position: "absolute",
    left: 20,
    bottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
