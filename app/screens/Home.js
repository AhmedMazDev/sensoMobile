import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

import UserDetails from "../components/UserDetails";
import Screen from "../components/Screen";

export default function Home() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>My Senso Dashboard</Text>
        <UserDetails name="Adam Albastov" balance="+4, 253.02" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    width: 80,
    height: 80,
    margin: 10,
  },
  headerText: {
    color: colors.headersText,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
