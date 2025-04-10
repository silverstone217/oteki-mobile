import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as StatusBarRN,
} from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { API_URL } from "../constants";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ShopWebView = () => {
  const paddingTop =
    Platform.OS === "android" ? StatusBarRN.currentHeight || 0 : 0;

  if (!API_URL) {
    return <Redirect href={"/"} />;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingTop }}>
        <WebView
          style={[styles.container]}
          source={{ uri: API_URL }}
          userAgent="Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"
          thirdPartyCookiesEnabled
        />
        <StatusBar style="auto" animated />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ShopWebView;
