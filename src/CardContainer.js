import {Image, StyleSheet, Text, View} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const CardContainer = () => {
  return (
    <View style={styles.content}>
      <View style={[styles.card04, styles.cardLayout]}>
        <Image
          style={[styles.backgroundcardIcon, styles.backgroundcardIconPosition]}
          resizeMode="cover"
          source="backgroundCard.png"
        />
        <Text style={styles.text8}>444 221 224 ***</Text>
        <Image style={styles.logoIcon3} resizeMode="cover" source="logo.png" />
        <Text style={[styles.text9, styles.text9Position]}>$45.500,12</Text>
        <Text style={[styles.mainWallet, styles.text9Position]}>
          Main Wallet
        </Text>
      </View>
      <View style={[styles.card03, styles.cardLayout]}>
        <Image
          style={[
            styles.backgroundcardIcon1,
            styles.backgroundcardIconPosition,
          ]}
          resizeMode="cover"
          source="backgroundCard.png"
        />
        <Text style={styles.text8}>444 221 224 ***</Text>
        <Image
          style={[styles.logoIcon4, styles.logoIconLayout]}
          resizeMode="cover"
          source="logo.png"
        />
        <Text style={[styles.text9, styles.text9Position]}>$4.550,67</Text>
        <Text style={[styles.mainWallet, styles.text9Position]}>
          ABC Wallet
        </Text>
      </View>
      <View style={[styles.card02, styles.cardLayout]}>
        <Image
          style={[
            styles.backgroundcardIcon1,
            styles.backgroundcardIconPosition,
          ]}
          resizeMode="cover"
          source="backgroundCard.png"
        />
        <Text style={styles.text8}>444 221 224 ***</Text>
        <Image
          style={[styles.logoIcon5, styles.logoIconLayout]}
          resizeMode="cover"
          source="logo.png"
        />
        <Text style={[styles.text9, styles.text9Position]}>$250,5</Text>
        <Text style={[styles.mainWallet, styles.text9Position]}>
          XYZ Wallet
        </Text>
      </View>
      <View style={[styles.card01, styles.cardLayout]}>
        <Image
          style={styles.backgroundcardIcon3}
          resizeMode="cover"
          source="backgroundCard.png"
        />
        <Text style={styles.text8}>444 221 224 ***</Text>
        <Image style={styles.logoIcon6} resizeMode="cover" source="logo.png" />
        <Text style={[styles.text9, styles.text9Position]}>$45.500,12</Text>
        <Text style={[styles.mainWallet, styles.text9Position]}>
          Main Wallet
        </Text>
      </View>
      <LinearGradient
        style={styles.overlay1}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
        useAngle={true}
        angle={180}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cardLayout: {
    height: 170,
    width: 319,
    left: 30,
    position: "absolute",
  },
  backgroundcardIconPosition: {
    height: 221,
    left: -24,
    top: -20,
    position: "absolute",
  },
  text9Position: {
    left: 25,
    textAlign: "left",
    position: "absolute",
  },
  logoIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  backgroundcardIcon: {
    width: 367,
  },
  text8: {
    top: 115,
    left: 26,
    letterSpacing: 2.8,
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 14,
    position: "absolute",
  },
  logoIcon3: {
    top: 110,
    left: 239,
    width: 49,
    height: 30,
    position: "absolute",
  },
  text9: {
    top: 55,
    fontSize: 28,
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    left: 25,
  },
  mainWallet: {
    top: 34,
    fontFamily: "Poppins-Regular",
    color: "#000",
    left: 25,
    fontSize: 14,
  },
  card04: {
    top: 0,
  },
  backgroundcardIcon1: {
    width: 365,
  },
  logoIcon4: {
    height: "14.12%",
    width: "5.33%",
    top: "67.65%",
    right: "13.17%",
    bottom: "18.24%",
    left: "81.5%",
  },
  card03: {
    top: 388,
  },
  logoIcon5: {
    height: "20.36%",
    width: "10.99%",
    top: "63.53%",
    right: "11.26%",
    bottom: "16.11%",
    left: "77.74%",
  },
  card02: {
    top: 194,
  },
  backgroundcardIcon3: {
    width: 367,
    left: -24,
    top: -20,
    height: 170,
    position: "absolute",
  },
  logoIcon6: {
    top: 832,
    left: 262,
    width: 56,
    height: 34,
    position: "absolute",
  },
  card01: {
    top: 582,
  },
  overlay1: {
    top: 521,
    left: 0,
    width: 375,
    height: 149,
    backgroundColor: "transparent",
    position: "absolute",
  },
  content: {
    flex: 1,
    width: "100%",
    height: 752,
  },
});

export default CardContainer;
