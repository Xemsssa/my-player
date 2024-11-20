import { StyleSheet, Text, View, SaveAreaView, Pressable } from "react-native";
import React, {useEffect}from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// import * as AppAuth from 'expo-app-auth's
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = async () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkTokenValidity = async  () => {
      const accessToken = await AsyncStorage.getItem('token');
      const expirationDate = await syncStorage.getItem('expirationDate');
      console.log('access token', accessToken);
      console.log('expiration date', expirationDate);

      if(accessToken && expirationDate) {
        const currentaTime = Date.now();
        if (currentaTime < parseInt(expirationDate)) {
            navigation.replace('Main')
        } else {
           AsyncStorage.removeItem('token');
           AsyncStorage.removeItem('expirationDate');
        }
      }
    }
  }, []);
  

    // const autenticate = async() =>{
    //     const config = {issuer:'https://accounts.spotify.com'},
    //     clientId: "dcv3r43vg",
    //     scopes: [
    //         'user-read-email',
    //         'user-library-read',
    //         'user-read-recently-played',
    //         'user-top-read',
    //         'playlist-read-private'
    //         'playlist-read-collaborative'
    //         'playlist-modify-public'
    //     ],
    //     redirectUrl: '',    
    // }
    const result = await AppAuth.authAsync(config);
    console.log(result);
    if (result.accessToken) {
      const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
      AsyncStorage.setItem('tokem'. result.accessToken);
      AsyncStorage.setItem('expirationDate', expirationDate.toString());
      navigation.navigate('Main')
    }
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={styles.container}>
      {/* <SaveAreaView> */}
      <Text>LoginScreen</Text>
      <View style={{ height: 80 }} />
      <Entypo
        style={{ textAlign: "center" }}
        name="spotify"
        size={50}
        color={"white"}
      />
      <Text style={styles.appName}>Spotify</Text>
      <View style={{ height: 80 }} />
      {/* </SaveAreaView>s */}

      <Pressable style={[styles.loginBtn, styles.loginBtnPhone]} onPress={()=> {
        autenticate()
      }}>
        <Text>Login to Spotify</Text>
      </Pressable>

      <Pressable style={styles.loginBtnPhone}>
        <MaterialIcons name="phone-android" size={24} color={"white"} />
        <Text style={styles.loginText}>Continue with phone number</Text>
      </Pressable>
      <Pressable style={styles.loginBtnPhone}>
        <MaterialIcons name="google" size={24} color={"white"} />
        <Text style={styles.loginText}>Continue with facebook</Text>
      </Pressable>
      <Pressable style={styles.loginBtnPhone}>
        <MaterialIcons name="phone-android" size={24} color={"white"} />
        <Text style={styles.loginText}>Continue with email</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: "white",
    fontSize: 28,
  },
  loginBtn: {
    backgroundColor: "#1d8954",
  },
  loginBtnPhone: {
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    color: "white",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  loginText: {
    color: "white",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
  },
});
