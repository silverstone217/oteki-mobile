import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { API_URL } from "../constants";
import { Link, Redirect } from "expo-router";

const WelcomeSCreen = () => {
  if (API_URL) {
    return <Redirect href={"/shop"} />;
  }

  return (
    <View style={[styles.container, { padding: 20, gap: 10 }]}>
      <Text
        style={{
          fontSize: 60,
          fontWeight: "600",
        }}
      >
        404
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "dimgray",
        }}
      >
        Page introuvable, réessayez plus tard!
      </Text>
      <StatusBar style="dark" animated />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
});
export default WelcomeSCreen;
