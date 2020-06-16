import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../Screen";
import StyledText from "../../components/StyledText";

export default function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <StyledText center size={24} children={"This is main/HomeScreen"} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
