import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function UserDetails({ name, balance }) {
  return (
    <View style={styles.container}>
      <Text style={styles.outerText}>
        Consultant : <Text style={styles.innerText}>{name}</Text>
      </Text>
      <View style={styles.balance}>
        <Text style={[styles.outerText, styles.text]}>Balance</Text>
        <Text style={[styles.balanceText, styles.text]}>{balance} €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  balance: {
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 30,
    backgroundColor: colors.white,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  outerText: {
    fontSize: 18,
    fontWeight: "normal",
    color: colors.headersText,
    marginBottom: 10,
  },
  innerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.innerText,
  },
  text: {
    marginBottom: 15,
  },
  balanceText: {
    color: colors.green,
    fontSize: 25,
    fontWeight: "bold",
  },
});
