import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import colors from "../config/colors";

export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Constants.statusBarHeight,
  },
});
