import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.wallet}>Wallet</Text>
        {/* <Image
          style={styles.btnnotificationsIcon}
          resizeMode="cover"
          source={require("../assets/btnNotifications.png")}
        /> */}
        <Image
          style={styles.profilepictureIcon1}
          resizeMode="cover"
          source={require("../assets/profilepicture.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wallet: {
    top: 1,
    left: 0,
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  btnnotificationsIcon: {
    height: "59.17%",
    width: "7.57%",
    top: "20%",
    right: "19.7%",
    bottom: "20.83%",
    left: "72.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  profilepictureIcon1: {
    top: 0,
    left: 279,
    width: 40,
    position: "absolute",
    height: 40,
  },
  header: {
    width: "80%",
    height: 40,
  },
});

export default Header;
