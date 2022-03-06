import { Image, StyleSheet, Text } from "react-native";
import Screen from "./app/components/Screen";
import Home from "./app/screens/Home";

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
